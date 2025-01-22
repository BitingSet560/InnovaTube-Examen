
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
require('../database')

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const nuevoUsuario = new User(req.body);
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json(usuarioGuardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los usuarios
const obtenerUsuarios = async() => {
    try {
        const usuarios = await User.find();
        console.log(usuarios);
        return json(usuarios);
    } catch (error) {
        return console.log("Ocurrio un error")
    }
};

module.exports = {
    obtenerUsuarios
}
