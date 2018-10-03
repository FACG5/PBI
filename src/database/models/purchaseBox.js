const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const purchaseBox = sequelize.define('purchase_box', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = purchaseBox;
