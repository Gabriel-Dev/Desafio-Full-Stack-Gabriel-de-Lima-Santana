"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(255),
      },
    });

    await queryInterface.bulkInsert("products", [
      {
        name: "Smartphone",
        description: "An advanced mobile device with communication, internet, and application features.",
      },
      {
        name: "Laptop",
        description: "A portable computer for work, study, and entertainment.",
      },
      {
        name: "Smartwatch",
        description: "An intelligent watch that offers features such as health monitoring, notifications, and applications.",
      },
      {
        name: "Wireless Headphones",
        description: "Bluetooth headphones for listening to music, making calls, and watching videos wirelessly.",
      },
      {
        name: "DSLR Camera",
        description: "A high-quality camera for professional and amateur photography.",
      },
      {
        name: "Virtual Reality (VR) Headset",
        description: "A device that provides immersive experiences in virtual environments.",
      },
      {
        name: "Gaming Console",
        description: "Gaming platform, such as PlayStation, Xbox, and Nintendo Switch.",
      },
      {
        name: "3D Printer",
        description: "Equipment that creates three-dimensional objects from digital models.",
      },
      {
        name: "Smart Home Devices",
        description: "Devices and systems that allow remote control of the home, such as smart bulbs, connected thermostats, and security cameras.",
      },
      {
        name: "4K Monitor",
        description: "High-resolution monitor for computers and entertainment.",
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
