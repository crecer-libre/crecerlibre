const { request, response } = require('express');
const bcrypt = require('bcryptjs');
//generate token
const { generateJWT, decodeToken } = require('../helpers/jwt');
const Professional = require('../models/Professional');

const register = async (req = request, res = response) => {
    try {
        const {
            name,
            username,
            password,
            role,
            position,
            gender
        } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const professionalExists = await Professional.findOne({ username });

        if (professionalExists) {
            return res.status(400).json({ msg: 'El nombre de usuario ya se encuentra en uso.' });
        }

        const professional = new Professional({
            name,
            username,
            password,
            position,
            role,
            gender
        });

        professional.password = hash;

        await professional.save();
        return res.status(201).json({msg: 'Profesional Registrado con exito!'});

    } catch (error) {
        return res.status(500).json({ "msg": "Error al registrar al Profesional. Por favor contactese con el Administrador." })
    }
};

const login = async (req = request, res = response) => {
    const { username, password } = req.body;

    //validar si nickname existe
    const professional = await Professional.findOne({ username });

    if (!professional) {
        return res.status(400).json({
            msg: 'Professional not found'
        });
    }

    //comparando password
    const pass = bcrypt.compareSync(password, professional.password);

    if (!pass) {
        return res.status(400).json({
            msg: 'Passwords do not match'
        });
    }

    //falta generar el jwt
    const tokens = await generateJWT(
        professional.id,
        professional.username,
        professional.role
        );

    res.json({
        msg: 'login',
        username: professional.username,
        accessToken: tokens[0],
        refreshToken: tokens[1],
    });
};

const refreshToken = async (req = request, res = response) => {

    const refresh = req.header('Authorization');

    if (!refresh) {
        return res.status(401).json({
            msg: 'Refresh Token error validate'
        });
    };

    const { id } = await decodeToken(refresh);
    const [accessToken, refreshToken] = await generateJWT(id);


    res.status(200).json({
        accessToken,
        refreshToken
    });
};

module.exports = {
    login,
    refreshToken,
    register
}