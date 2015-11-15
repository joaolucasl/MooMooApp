var DB = require('../database/db.js');
var _ = require('lodash');

var Posts = DB.models.Post;

/**
 *
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
        "message": 'Error:' + err
      });
    });
};


module.exports = exports;
