const express = require('express');
const router = express.Router();
const fileSystem = require('fs');
const path = require('path');
const http = require('http');


var musicServer = ('/', async (req, res) => {
    let filePath = path.join(__dirname, "../media/foydalandim.mp3");

    var readStream = fileSystem.createReadStream(filePath);


    res.download(filePath);
    //readStream.pipe(res);
});


module.exports = musicServer;