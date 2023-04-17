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
            status: "Hora Disponible"
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
}

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
        hour.status = "Hora Tomada"

        await hour.save();

        return res.status(200).json({
            msg: "Hora agendada correctamente."
        });

    } catch (error) {
        return res.status(500).json({
            msg: "Error al tomar hora pedagogica."
        })
    }
}

const updateHour = () => {

}

module.exports = {
    createHour,
    scheduleHour,
    updateHour

}