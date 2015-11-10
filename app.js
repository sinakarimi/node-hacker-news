var express = require('express');
var http = require('http');

var app = express();

app = http.createServer(app);

module.exports = app;
