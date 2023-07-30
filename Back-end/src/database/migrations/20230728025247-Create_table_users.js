'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name:{
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING(150),
        unique: true,
        allowNull: false,
      },
      password:{
        type: Sequelize.STRING(150),
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("users");
  }
}

