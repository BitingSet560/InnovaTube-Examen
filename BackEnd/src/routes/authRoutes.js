const express = require('express');
const { registerUser, loginUser  } = require('../controllers/user.controller');
const { verifyRecaptcha } = require('../middleware/recaptcha.middleware');
const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//RUTAS DE ENPOINTS
router.post('/register', verifyRecaptcha, registerUser);

router.post('/login', loginUser); // Nueva ruta para login

module.exports = router;
