const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'InnovaTube'
    });
    console.log('Conexión exitosa a mongo');
  } catch (error) {
    console.error('Error al conectar con mongo:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
