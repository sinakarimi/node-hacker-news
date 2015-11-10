var express = require('express');
var router = new express.Router();

// Register the routes.
router.use('/', require('src/article/router'));

module.exports = router;
