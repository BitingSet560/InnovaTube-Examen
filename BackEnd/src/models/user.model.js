const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    contrasenia: { type: String, required: true}
});

const User = mongoose.model('Usuarios', userSchema);

module.exports = User;
