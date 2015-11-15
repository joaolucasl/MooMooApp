var express = require("express");
var router = express.Router();
var DB = require('../database/db.js');
var postController = require('../controllers/posts');
var Posts = DB.models.Post;


router.get("/", function (req, res) {

  var data = {};
  Posts
    .findAll()
    .then(function (posts) {
      res.render("index", {
        state: JSON.stringify(posts)
      });
    })
    .catch(function (err) {
      res.render("index", {
        state: JSON.stringify({
          "message": err
        })
      });

    });


})

router.get("/posts/", postController.listAllPosts);

module.exports = router;
