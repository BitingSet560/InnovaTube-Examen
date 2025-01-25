require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'secret_key',
  jwtExpiresIn: '1h', 
};