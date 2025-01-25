const express = require('express');
const authRoutes = require('./routes/authRoutes');
const videoRoutes = require('./routes/youtubeRoutes');


const app = express();
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/youtube', videoRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
