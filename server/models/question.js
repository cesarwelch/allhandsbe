'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    question: DataTypes.STRING,
    session: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {});
  question.associate = function(models) {
    // associations can be defined here
  };
  return question;
};