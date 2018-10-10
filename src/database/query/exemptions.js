const sequelize = require('../config/connection');

const exemptions = async (employee) => {
  const { totalAllownace, employeeId } = employee;
  const result = await sequelize.query(`select exemption_university , exemption_house ,exemption_resident , ( select CASE when transportation > 0.1*(salary+${totalAllownace}) then (0.1*(salary+${totalAllownace})*(select saving_ratio from fixed_varibles where id = 1)) else (transportation * (select dolar from fixed_varibles where id = 1)) END AS "transportationsExemptions")from employees where id=${employeeId}`);
  return result[0][0];
};

module.exports = exemptions;
