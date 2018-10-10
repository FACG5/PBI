const sequelize = require('../config/connection');

const exemptions = async (employee, variables) => {
  const { totalAllownace, employeeId } = employee;
  const { dolar } = variables;

  const result = await sequelize.query(`select exemption_university , exemption_house ,exemption_resident , ( select CASE when transportation > 0.1*(salary+${totalAllownace}) then (0.1*(salary+${totalAllownace})*${dolar}) else (transportation * ${dolar}) END AS "transportationsExemptions")`
+ `from employees where id=${employeeId}`);
  const employeeExemptions = result[0][0];
  return employeeExemptions;
};

module.exports = exemptions;
