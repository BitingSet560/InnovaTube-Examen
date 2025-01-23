const userRepository = require('../repository/user.repository');

const register = async (userData) => {
  return await userRepository.createUser(userData);
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

  if (user.contrasenia !== contrasenia) {
    throw new Error('Credenciales inválidas');
  }

  return {
    message: 'Inicio de sesión exitoso',
    user: {
      id: user._id,
      nombre: user.nombre,
      email: user.email,
    },
  };
};


module.exports = { 
  register,
  login
 };
