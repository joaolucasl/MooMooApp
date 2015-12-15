var express = require('express');
var router = express.Router();
var PostsRouter = require('./posts.routes.js');
var DB = require('../database/db.js');
var Posts = DB.models.Post;

router.get('/', function (req, res) {
  Posts
    .findAll()
    .then(function (posts) {
      res.render('index', {
        state: JSON.stringify(posts)
      });
    })
    .catch(function (err) {
      res.render('index', {
        state: JSON.stringify({
          'message': err
        })
      });
    });
});

router.use('/api/posts', PostsRouter);


module.exports = router;
