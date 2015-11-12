require('lib/mongoose-connection');

var express = require('express');
var http = require('http');
var logger = require('lib/logger');
var jade = require('jade');

var app = express();
// app.use(express.bodyParser());

// Define locals to use within template
app.locals = {
	formatDate: require('lib/format-date')
};

// Set the default view engine to Jade.
app.set('views', __dirname + '/src')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public', { maxAge: 31557600000 }));

// Attach router
app.use(require('lib/router'));

app = http.createServer(app);

// Uncaught exception handler.
process.addListener('uncaughtException', function(err) {
	logger.error('Uncaught error in server.js', { err:err, stack: err.stack });
	process.exit(1);
});

module.exports = app;
