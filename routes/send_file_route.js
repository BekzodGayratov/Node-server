const express = require('express');
const router = express.Router();
const fileSystem = require('fs');
const path = require('path');
const http = require('http');
const musicRoute = require('../controller/send_file_controller');


var sendFileRoute = ('/', musicRoute);


module.exports = sendFileRoute;