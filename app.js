require('lib/mongoose-connection');

var express = require('express');
var http = require('http');
var logger = require('lib/logger');

var app = express();

// Attach router
app.use(require('lib/router'));

app = http.createServer(app);

// Uncaught exception handler.
process.addListener('uncaughtException', function(err) {
	logger.error('Uncaught error in server.js', { err:err, stack: err.stack });
	process.exit(1);
});

module.exports = app;
