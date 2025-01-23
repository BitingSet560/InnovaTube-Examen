const express = require('express');
const { searchVideos } = require('../controllers/video.controller');
const router = express.Router();

//Activar cors
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Ruta para buscar videos en YouTube
router.get('/search', searchVideos);

module.exports = router;
