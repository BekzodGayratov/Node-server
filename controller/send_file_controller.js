const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const fileSystem = require('fs');


var sendFile = ('/', (req, res) => {

    let filePath = path.join(__dirname, "../media/music/foydalandim.mp3");

    var readStream = fileSystem.createReadStream(filePath);


    //res.download(filePath);
    readStream.pipe(res);
});


module.exports = sendFile;



