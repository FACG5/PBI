const sequelize = require('../config/connection');

const exemptions = (employee, variables) => new Promise((resolve, reject) => {
  const { totalAllownace, id } = employee;
  const { dolar } = variables;

  sequelize.query(`select exemption_university AS "exemptionUniversity", exemption_house AS "exemptionHouse",exemption_resident AS "exemptionResident", ( select CASE when transportation > 0.1*(salary+${totalAllownace}) then (0.1*(salary+${totalAllownace})*${dolar}) else (transportation * ${dolar}) END AS "transportationsExemptions")`
+ `from employees where id=${id}`)
    .then((result) => {
      const employeeExemptions = result[0][0];
      resolve(employeeExemptions);
    }).catch(err => reject(err));
});
module.exports = exemptions;
