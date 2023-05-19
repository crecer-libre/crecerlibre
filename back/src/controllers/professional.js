const {request, response} = require('express');
const Proffesional = require('../models/Professional');

const getUsers = async (req = request, res = response) => {
    try {
        const users = await Proffesional.find({role: 'PROFESSIONAL_ROLE'});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({"msg": "Estamos presentando problemas tecnicos, contactese con el Administrador."})
    }
}

module.exports = {
    getUsers
}