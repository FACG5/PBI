const sequelize = require('../config/connection');

const exemptions = (employeeDeductions, employee, variables) => new Promise((resolve, reject) => {
  const { totalAllownace, id } = employee;
  const { saving, deductions_social_fund: deductionsSocialFund } = employeeDeductions;
  const { dolar } = variables;

  sequelize.query(`select exemption_university AS "exemptionUniversity", exemption_house AS "exemptionHouse",exemption_resident AS "exemptionResident", ( select CASE when transportation > 0.1*(salary+${totalAllownace}) then (0.1*(salary+${totalAllownace})*${dolar}) else (transportation * ${dolar}) END AS "transportationsExemtions")`
+ `from employees where id=${id}`)
    .then((result) => {
      const employeeExemptions = result[0][0];
      employeeExemptions.boxesExemptions = (deductionsSocialFund + saving) * dolar;

      employeeExemptions.totalExemptions = employeeExemptions.exemptionUniversity
      + employeeExemptions.exemptionHouse
      + employeeExemptions.exemptionResident + employeeExemptions.transportationsExemtions
      + employeeExemptions.boxesExemptions;

      resolve(employeeExemptions);
    });
});
module.exports = exemptions;
