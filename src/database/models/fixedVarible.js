const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const fixedVarible = sequelize.define('fixed_varible', {
  dolar: {
    type: Sequelize.DOUBLE,
    defaultValue: 3.5794,
  },
  exemption_resident: {
    type: Sequelize.DOUBLE,
    defaultValue: 3000.0,
  },
  tax_value: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.05,
  },
  contribution_institute: {
    type: Sequelize.DOUBLE,
    defaultValue: 10.0,
  },
  contribution_employee: {
    type: Sequelize.DOUBLE,
    defaultValue: 5.0,
  },
});

module.exports = fixedVarible;
