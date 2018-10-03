const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const admin = sequelize.define('admin', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = admin;
