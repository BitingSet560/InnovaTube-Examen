const userRepository = require('../repository/user.repository');

const register = async (userData) => {
  return await userRepository.createUser(userData);
};

module.exports = { register };
