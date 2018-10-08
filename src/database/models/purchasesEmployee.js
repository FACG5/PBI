const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const purchasesEmployee = sequelize.define('purchases_employee', {
  payment: {
    type: Sequelize.DOUBLE,
    defaultValue: 0,
  },
});

module.exports = purchasesEmployee;
