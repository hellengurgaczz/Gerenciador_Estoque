const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const appRoute = require('./routes/appRoute');
app.use('/', index);
app.use('/persons', appRoute);
module.exports = app;