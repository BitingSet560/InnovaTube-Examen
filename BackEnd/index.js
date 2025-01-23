const express = require('express');
const connectDB = require('./src/config/database');
const cors = require('cors');
require('dotenv').config();

const app = require('./src/app');
app.use(cors());
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
