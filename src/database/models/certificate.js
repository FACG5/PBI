const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const certificate = sequelize.define('certificate', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  link: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = certificate;
