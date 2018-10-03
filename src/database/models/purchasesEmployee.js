const sequelize = require('../config/connection');

const purchasesEmployee = sequelize.define('purchases_employee', {});

module.exports = purchasesEmployee;
