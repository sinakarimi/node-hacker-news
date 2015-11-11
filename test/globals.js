require('app-module-path').addPath(__dirname + '/../');

var path = require('path');

var test = {
	app: require('../app'),
	fixtures: require('./fixtures'),
};

global.test = test;
