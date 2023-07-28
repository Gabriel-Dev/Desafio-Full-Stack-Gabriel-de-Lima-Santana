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
        description: "Dispositivo móvel avançado com recursos de comunicação, internet e aplicativos.",
      },
      {
        name: "Laptop",
        description: "Computador portátil para trabalhar, estudar e entretenimento.",
      },
      {
        name: "Smartwatch",
        description: "Relógio inteligente que oferece recursos como monitoramento de saúde, notificações e aplicativos.",
      },
      {
        name: "Fone de ouvido sem fio",
        description: "Fones de ouvido Bluetooth para ouvir música, fazer chamadas e assistir a vídeos sem fios.",
      },
      {
        name: "Câmera DSLR",
        description: "Câmera de alta qualidade para fotografia profissional e amadora.",
      },
      {
        name: "Realidade Virtual (VR) headset",
        description: "Dispositivo que proporciona experiências imersivas em ambientes virtuais.",
      },
      {
        name: "Console de jogos",
        description: "Plataforma de jogos, como PlayStation, Xbox e Nintendo Switch.",
      },
      {
        name: "Impressora 3D",
        description: "Equipamento que cria objetos tridimensionais a partir de modelos digitais.",
      },
      {
        name: "Dispositivos de casa inteligente",
        description: "Dispositivos e sistemas que permitem controlar a casa remotamente, como lâmpadas inteligentes, termostatos conectados e câmeras de segurança.",
      },
      {
        name: "Monitor 4K",
        description: "Monitor de alta resolução para computadores e entretenimento.",
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
