//Archivo de conexion a la base de datos
const mongoose = require('mongoose');

//URI de la base de datos de mongo
const MONGO_URI = 'mongodb://mongo:ZRwXXwZnSqXJoBeLLSqXNuyZDihBcLEL@junction.proxy.rlwy.net:54115'; 

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión exitosa a la base de datos');
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });

module.exports = mongoose;
