const express = require('express');
const app = express();
require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
app.use(express.json());
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

// IMPORTED MODULES 
const  RegisterRoute = require('./routes/register_route');

mongoose.connect('mongodb://127.0.0.1/users');
mongoose.connection.on('open', () => {
    console.log("DATABASE CONNECTED SUCCESSFULYY!")
});

mongoose.connection.on('error', () => {
    console.log("ERROR ON CONNECTION TO DATABASE")
});

// USAGE
app.use('/',RegisterRoute);

app.listen(port, hostname, function () {
    console.log(`Server running on: http://${hostname}:${port}`);
});