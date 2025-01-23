const userService = require('../appservice/usuarios.appservice');

const registerUser = async (req, res, next) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await userService.login(req.body); 
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { 
  registerUser,
  loginUser
};
