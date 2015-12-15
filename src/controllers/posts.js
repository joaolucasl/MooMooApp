var DB = require('../database/db.js');
var _ = require('lodash');
var validate = require('validate.js');
var Posts = DB.models.Post;

/**
 * Lists all the posts without any filtering.
 * @param {[[Type]]} req [[Description]]
 * @param {[[Type]]} res [[Description]]
 */
exports.listAllPosts = function (req, res) {
  Posts
    .findAll()
    .then(function (posts) {
      res.send(posts);
    })
    .catch(function (err) {
      res.json({
        'message': 'Error:' + err
      });
    });
};
/**
 * [[Description]]
 * @param {[[Type]]} req [[Description]]
 * @param {[[Type]]} res [[Description]]
 */
exports.newPost = function (req, res){
  res.send(req.body);
}


module.exports = exports;
