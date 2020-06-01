'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeacherApplications = sequelize.define('TeacherApplications', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    category: DataTypes.STRING,
    subject: DataTypes.STRING,
    videoLink: DataTypes.STRING,
    resumePath: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  TeacherApplications.associate = function(models) {
    // associations can be defined here
  };
  return TeacherApplications;
};