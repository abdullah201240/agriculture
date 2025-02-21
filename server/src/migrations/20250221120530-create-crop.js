'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('crops', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      landId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pH: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      nitrogen: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      phosphorus: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      potassium: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      temperature: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      humidity: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      rainfall: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      prediction: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      landName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('crops');
  },
};
