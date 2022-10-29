const express = require('express');
const app = express();
require('dotenv').config();
const musicRoute = require('./routes/send_file_route');
const http = require('http');
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.use('/music', musicRoute);

app.listen(port, hostname, function () {
    console.log(`Server running on: http://${hostname}:${port}`);
});