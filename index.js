const express = require('express');
const camera = require

var app = express();

app.use('/camera', camera.record);
