var express = require('express');
var cors = require('cors');
var postController = require('../controllers/posts');
var router = express.Router();



router.all('/all', postController.listAllPosts);
router.all('/new', postController.newPost);

module.exports = router;
