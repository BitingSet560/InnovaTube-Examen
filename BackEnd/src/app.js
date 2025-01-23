const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
