const {request, response} = require('express');
const Student = require('../models/Student');

const registerStudent = async (req = request, res = response) => {
    try {
        const {
            rut,
            name,
            lastName,
            phone
        } = req.body;

        const studentExist = await Student.findOne({rut: rut});

        if (studentExist) {
            return res.status(404).json({msg: "El Rut ingresado se encuentra registrado."});
        }

        const student = Student({
            rut,
            name,
            lastName,
            phone
        });

        await student.save();

        return res.status(200).json({msg: "Sus datos han sido guardados."});

    } catch (error) {
        return res.status(500).json({msg: "Error, comuniquese con el administrador."});
    }
}

const findStudentByRut = async (req = request, res = response) => {
    try {
        
        const {rut} = req.params;
        
        const studentExist = await Student.findOne({rut: rut});

        if (!studentExist) {
            return res.status(404).json({msg: "El Rut ingresado no se encuentra registrado."});
        }

        return res.status(200).json({msg: "ok"});


    } catch (error) {
        return res.status(500).json({msg: "Error, comuniquese con el administrador."})
    }
}

const getAllStudent = async ( req = request, res = response ) => {
    try {
        const students = await Student.find();

        return res.status(200).json(students);

    } catch (error) {
        return res.status(500).json({msg: "Error, comuniquese con el administrador."})
    }
}

module.exports = {
    findStudentByRut,
    registerStudent,
    getAllStudent
}