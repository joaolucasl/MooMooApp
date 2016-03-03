var express = require('express');
var cors = require('cors');
var postController = require('../controllers/posts');
var router = express.Router();



router.all('/all', postController.listAll);
router.post('/new', postController.new);

module.exports = router;
