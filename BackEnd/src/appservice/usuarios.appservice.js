const userRepository = require('../repository/user.repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async (userData) => {
  const { contrasenia } = userData;
  const hashedPassword = await bcrypt.hash(contrasenia, 10);
  const userToSave = { ...userData, contrasenia: hashedPassword };
  return await userRepository.createUser(userToSave);
};

const login = async (credentials) => {
  const { email, contrasenia } = credentials;

  if (!email || !contrasenia) {
    throw new Error('Todos los campos son obligatorios');
  }

  const user = await userRepository.findUserByEmail(email);

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const isPasswordValid = await bcrypt.compare(contrasenia, user.contrasenia);

  if (!isPasswordValid) {
    throw new Error('Credenciales inválidas');
  }

  const token = jwt.sign(
    { id: user._id, email: user.email }, 
    process.env.JWT_SECRET,             
    { expiresIn: '1h' }                 
  );

  return {
    message: 'Inicio de sesión exitoso',
    user: {
      id: user._id,
      nombre: user.nombre,
      email: user.email,
    },
    token, 
  };
};

module.exports = { 
  register,
  login,
};
