const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiresIn } = require('../config/config');


const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    nombre: user.nombre,
  };

  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    throw new Error('Token inválido o expirado');
  }
};

module.exports = { generateToken, verifyToken };
