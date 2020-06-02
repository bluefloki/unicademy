"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("TeacherApplications", "message", {
      type: Sequelize.TEXT,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("TeacherApplications", "message", {
      type: Sequelize.STRING,
    });
  },
};
