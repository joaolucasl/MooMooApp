/**
 * @description Creates the Model for the Comments table.
 *              The following fields are created
 *              - id : The commentary ID
 *              - content: The commentary text
 *              - uuid: The original poster UUID, since we don't have users.
 *              - createdAT: The timestamp of the comment creation
 */
module.exports = function (DB, Sequelize) {
  return DB.define('Comment', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: Sequelize.STRING,
    uuid: Sequelize.STRING,
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  });
}
