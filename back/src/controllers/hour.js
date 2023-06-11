const { request, response } = require('express');
const Hour = require('../models/Hour');
const Professional = require('../models/Professional');
const Student = require('../models/Student');
const { decodeToken } = require('../helpers/jwt');

function compararFechas(a, b) {
    return a.fecha - b.fecha;
}

const createHour = async (req = request, res = response) => {
    try {
        const {
            username,
            date
        } = req.body;

        const professional = await Professional.findOne({ username });

        console.log(professional.id);
        console.log(date);

        const hour = new Hour({
            proffesionalId: professional.id,
            date: date,
            status: "HORA_DISPONIBLE"
        });

        await hour.save();

        return res.status(201).json({
            msg: 'La hora se genero correctamente.'
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Error al generar la hora pedagogica.'
        });
    }
};

const scheduleHour = async (req = request, res = response) => {
    try {
        const { idHour, rut } = req.body;
        const student = await Student.findOne({ rut });

        if (!student) {
            return res.status(404).json({
                msg: 'El Rut no se encuentra registrado.'
            });
        }

        await Hour.findByIdAndUpdate(idHour, {
            studentId: student.id,
            status: "HORA_TOMADA"
        });

        return res.status(200).json({
            msg: "Hora agendada correctamente."
        });

    } catch (error) {
        return res.status(500).json({
            msg: "Error al tomar hora pedagogica."
        })
    }
};

const getHoursByProfessional = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const professional = await Professional.findById(id);
        const hoursForValidation = await Hour.find({ proffesionalId: professional.id, active: true });

        //validation for hours not taken
        for (const h of hoursForValidation) {
            if (h.date < Date.now() && h.status === "HORA_DISPONIBLE") {
                const hourFailed = await Hour.findById(h.id);
                hourFailed.status = "HORA_EXPIRADA";
                await hourFailed.save();
            }
        }
        const hoursGet = await Hour.find({ proffesionalId: professional.id, active: true });
        const hours = [];

        for (const h of hoursGet) {
            const student = await Student.findById(h.studentId);
          
            const hour = {
              professional: professional.name,
              student: student?.name,
              hour: {
                id: h.id,
                date: h.date,
                status: h.status,
                observation: h.observation
              }
            };
            hours.push(hour);
          }
        return res.status(200).json({
            hours
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
};

const updateHour = async (req = request, res = response) => {
    try {
        const { idHour } = req.body;
        const hour = await Hour.find({ id: idHour })
        hour.status = 'HORA_FINALIZADA';
        await hour.save();

        return res.status(200).json({
            msg: "Se actualizo el estado de la hora pedagogica."
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Error al actualizar hora."
        })
    }
};

const getHoursByProfessionals = async (req = request, res = response) => {
    try {
        const professionals = await Professional.find({ role: 'PROFESSIONAL_ROLE' });
        const hours = await Hour.find({ status: 'HORA_DISPONIBLE' });
        let hoursListArr = [];

        professionals.map((p) => {
            const hoursFilter = hours.filter(h => h.proffesionalId == p.id);
            const proHour = {
                professional: p,
                hours: hoursFilter
            };
            hoursListArr.push(proHour);
        })
        const hoursList = hoursListArr.filter((h) => h.hours.length > 0);

        return res.status(200).json({
            msg: 'ok',
            hoursList
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al listar horas."
        })
    }
};

const getHourById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const hour = await Hour.findById(id);
        console.log('hour: ', hour);
        const professional = await Professional.findById(hour.proffesionalId);
        console.log('professional: ', professional);
        const proHour = {
            hour,
            professional
        }
        return res.status(200).json({
            msg: 'ok',
            proHour
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al mostrar Hora."
        })
    }
}

const generateObservationById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { observation } = req.body;
        const hour = await Hour.findById(id.trim());
        hour.observation = observation;
        await hour.save();
        return res.status(200).json({
            msg: 'ok',
        });
    } catch (error) {
        return res.status(500).json({
            error
        });
    }
}

module.exports = {
    createHour,
    scheduleHour,
    updateHour,
    getHoursByProfessional,
    getHoursByProfessionals,
    getHourById,
    generateObservationById
}