var Sequelize = require('sequelize');
var config = require('../config/database.json');



// Creating a new connection to the Database via config files.
var db = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect
});

/**
 * Importing the Database models, and then creating their
 * respective relations...
 */
var Post = db.import(__dirname + '/../models/Post.js');
var Comment = db.import(__dirname + '/../models/Comment.js');

Comment.belongsTo(Post);

/**
 * Exporting the Sequelize, DB Connection and Models
 * for ease of access in other sections of code
 */
module.exports = {
  "Sequelize": Sequelize,
  "DB": db,
  "models": {
    Post: Post,
    Comment: Comment
  }
};
