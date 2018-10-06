const sequelize = require('../config/connection');
const exemptions = require('./exemptions');
const convertToCamelCase = require('camelcase-keys-deep');


const deductionsQuery = (employee, variables) => new Promise((resolve, reject) => {
  const {
    savingRatio,
    contributionEmployee,
    contributionInstitute,
    dolar,
  } = variables;

  const {
    id,
    salary,
    childAllownace,
    wifeAllowance,
    transportation,
    allowanceGasoline,
    allowanceMobile,
    allowanceWork,
    allowanceJerusalem,
    totalAllownace,
  } = employee;
  const employeeContribution = (childAllownace
        + wifeAllowance
        + allowanceGasoline
        + transportation
        + allowanceMobile
        + allowanceJerusalem
        + salary)
      * contributionEmployee;
  sequelize
    .query(
      `select deductions_health_insurance,deductions_loans,deductions_social_fund,(salary*${savingRatio}) AS saving ,(select SUM(payment) AS purchase_boxes from purchases_employees where employee_id = ${id})`
          + `from employees where id = ${id}`,
    )
    .then((result) => {
      let employeeDeductions = result[0][0];

      employeeDeductions.employeeContribution = employeeContribution;

      exemptions(employeeDeductions, employee, variables).then(
        (employeeExemptions) => {
          employeeDeductions.salaryTaxes = (salary + totalAllownace) * dolar
              - employeeExemptions.totalExemptions;
          employeeDeductions.sectionTaxes1 = 0;
          employeeDeductions.sectionTaxes2 = 0;
          employeeDeductions.sectionTaxes3 = 0;
          if (employeeDeductions.salaryTaxes <= 6250) {
            employeeDeductions.sectionTaxes1 = employeeDeductions.salaryTaxes * 0.05;
          }
          if (
            employeeDeductions.salaryTaxes > 6250
              && employeeDeductions.salaryTaxes <= 12500
          ) {
            employeeDeductions.sectionTaxes1 = 6250 * 0.05;
            employeeDeductions.sectionTaxes2 = (employeeDeductions.salaryTaxes - 6250) * 0.1;
          }
          if (employeeDeductions.salaryTaxes > 12500) {
            employeeDeductions.sectionTaxes1 = 6250 * 0.05;
            employeeDeductions.sectionTaxes2 = 6250 * 0.1;
            employeeDeductions.sectionTaxes3 = (employeeDeductions.salaryTaxes - 12500) * 0.15;
          }
          employeeDeductions.sectionTaxesTotal = employeeDeductions.sectionTaxes1
              + employeeDeductions.sectionTaxes2
              + employeeDeductions.sectionTaxes3;
              employeeDeductions = convertToCamelCase(employeeDeductions);
          employeeDeductions.contributionInstitute = (salary
                + wifeAllowance
                + childAllownace
                + allowanceGasoline
                + allowanceMobile
                + transportation
                + allowanceJerusalem)
              * contributionInstitute;
          employeeDeductions.totalTaxes = employeeDeductions.sectionTaxesTotal / dolar;
          const {
            totalTaxes,
            deductionsSocialFund,
            saving,
            deductionsHealthInsurance,
            deductionsLoans,
            purchaseBoxes,
          } = employeeDeductions;
          employeeDeductions.totalDeductions = totalTaxes
              + deductionsHealthInsurance
              + saving
              + employeeContribution
              + deductionsSocialFund
              + deductionsLoans
              + purchaseBoxes;
          resolve(Object.assign(employeeDeductions, employeeExemptions));
        },
      );
    })
    .catch(err => reject(err));
});

module.exports = deductionsQuery;
