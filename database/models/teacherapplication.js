'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeacherApplication = sequelize.define('TeacherApplication', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    category: DataTypes.STRING,
    subject: DataTypes.STRING,
    videoLink: DataTypes.STRING,
    resumePath: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  TeacherApplication.associate = function(models) {
    // associations can be defined here
  };
  return TeacherApplication;
};