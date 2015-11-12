require('app-module-path').addPath(__dirname + '/../../');
require('lib/mongoose-connection');

var _ = require('lodash');
var async = require('async');
var wait = require('waitjs');
var request = require('superagent');
var logger = require('lib/logger');

var Article = require('./model');

var DURATION = '1 hour';

function getArticles() {
	logger.info('Getting articles');

	request
		.get('http://hn.algolia.com/api/v1/search_by_date?query=nodejs')
		.end(function(err, res) {
			if (err) {
				logger.error('Error getting articles', { err: err });
				return;
			}

			processArticles(res.body.hits);
		});
};

function processArticles(articles) {
	logger.info('Processing articles');

	async.eachLimit(articles, 1, saveArticle, function(err) {
		if (err) {
			logger.error('Error processing article', { err: err, stack: err.stack });
		}

		logger.info('Finished process articles at', new Date());
	});
}

function saveArticle(article, callback) {
	Article.createOrUpdate(article, function(err) {
		if (err) {
			return callback(err);
		}

		callback(null)
	});
}

repeat(DURATION, getArticles, true);
