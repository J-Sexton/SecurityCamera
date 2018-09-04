const express = require('express');
const camera = require('./camera');

var app = express();

app.use('/camera', camera.record);

app.listen('3000');