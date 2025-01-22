const express = require('express');
const { obtenerUsuarios } = require('./controllers/user.controller');

const router = express.Router();

router.use('/users', obtenerUsuarios); // Rutas para usuarios

module.exports = router;