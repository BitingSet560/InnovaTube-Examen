const { verifyToken } = require('../utils/jwt.utils');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No se proporcionó un token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = { authenticate };
