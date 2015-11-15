/**
 * @description Creates the DB Model for the Posts table
 *              The following fields are created:
 *              - id: The Post ID
 *              - content: A 200-characters-long string with the post's content
 *              - uuid: Original Poster's unique identifier
 *              - createdAt: Timestamp of the Post creation moment
 *              - latitude: user's Lat when they created the Post
 *              - longitude: user's Long when they created the Post
 *
 */
module.exports = function (DB, Sequelize) {
  return DB.define('Post', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    content: {
      type: Sequelize.STRING(200)
    },
    uuid: Sequelize.STRING,
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    latitude: {
      type: Sequelize.FLOAT
    },
    longitude: {
      type: Sequelize.FLOAT
    }
  });
}
