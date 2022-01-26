const express = require('express');
const path = require('path');

const apiRouter = require('./routes/api');

// Recupero los datos de .env
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Definición de rutas
app.use('/api', apiRouter);

module.exports = app;