
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
require('../config/database')

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
  };
  
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
module.exports = {
    createUser,
    findUserByEmail
}
