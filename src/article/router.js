var express = require('express');
var controller = require('./controller');
var router = new express.Router();

router.get('/', controller.list);
router.get('/:articleId/delete', controller.delete);

module.exports = router;
