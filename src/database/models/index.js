
const admin = require('./admin');
const certificate = require('./certificate');
const employee = require('./employee');
const fixedVarible = require('./fixedVarible');
const purchaseBox = require('./purchaseBox');
const purchasesEmployee = require('./purchasesEmployee');
const report = require('./report');
const sequelize = require('../config/connection');

certificate.belongsTo(employee, {
  onDelete: 'CASCADE', foreignKey: 'employee_id', targetKey: 'id',
});
employee.hasMany(certificate, { foreignKey: 'employee_id' });

purchasesEmployee.belongsTo(employee, {
  onDelete: 'CASCADE', foreignKey: 'employee_id', targetKey: 'id',
});
employee.hasMany(purchasesEmployee, { foreignKey: 'employee_id' });

purchasesEmployee.belongsTo(purchaseBox, {
  onDelete: 'CASCADE', foreignKey: 'purchaseBox_id', targetKey: 'id',
});
purchaseBox.hasMany(purchasesEmployee, { foreignKey: 'purchaseBox_id' });


module.exports = {
  admin,
  certificate,
  employee,
  fixedVarible,
  purchaseBox,
  purchasesEmployee,
  report,
  sequelize,
};
