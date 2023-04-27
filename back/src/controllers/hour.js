const {request, response} = require('express');
const Hour = require('../models/Hour');
const Professional = require('../models/Professional');
const Student = require('../models/Student');
const { decodeToken } = require('../helpers/jwt');

const createHour = async (req = request, res = response) => {
    try {
        const {username} = await decodeToken(req.header('Authorization')); 
        const professional = await Professional.findOne({username});

        const {
            date
        } = req.body;

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
        const {idHour ,rut} = req.body;

        const student = await Student.findOne({rut})

        if(!student){
            return res.status(200).json({
                msg: 'El Rut no se encuentra registrado.'
            });
        }

        const hour = await Hour.findOne({id: idHour});

        hour.studentId = student.id;
        hour.status = "HORA_TOMADA"

        await hour.save();

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
        const {username} = await decodeToken(req.header('Authorization')); 
        const professional = await Professional.findOne({username});
        const hours = await Hour.find({proffesionalId: professional.id, active: true, status: 'HORA_DISPONIBLE'});

        return res.status(200).json({
            hours
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al mostrar horas."
        })
    }
};

const updateHour = async ( req = request, res = response ) => {
    try {
        const { idHour } = req.body;
        const hour = await Hour.find({id: idHour})
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

const getHoursByProfessionals = async ( req = request, res = response ) => {
    try {        
        const professionals = await Professional.find({role: 'PROFESSIONAL_ROLE'});
        const hours = await Hour.find({ status: 'HORA_DISPONIBLE' });
        let hoursList = [];

        professionals.map((p) => {
            const hoursFilter = hours.filter(h => h.proffesionalId == p.id);

            const proHour = {
                professional: p,
                hours: hoursFilter
            };

            hoursList.push(proHour);
        })

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
        const {id} = req.params;

        const hour = await Hour.findOne({id: id});
        const professional = await Professional.findOne({id: hour.proffesionalId});

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

module.exports = {
    createHour,
    scheduleHour,
    updateHour,
    getHoursByProfessional,
    getHoursByProfessionals,
    getHourById
}