const convertToCamelCase = require('camelcase-keys-deep');
const bonusQuery = require('../../database/query/bonusQuery');
const deductionsQuery = require('../../database/query/deductionsQuery');
const exemptions = require('../../database/query/exemptions');
const deductionOperations = require('./deductionsOperations');
const exemptionsOperations = require('./exemptionsOperations');
const finalSalaryCalculation = require('../helpers/finalSalary');
const bunusesOperations = require('./bunusesOperations');

const { fixedVarible } = require('../../database/models');

const salaryCalculations = async (employee, date, variables) => {
  const bonus = convertToCamelCase(employee);
  const bunuses = bunusesOperations(bonus, variables);
  const dedeuctions = await deductionsQuery(bunuses, variables);
  const employeeExemptions = await exemptions(bunuses, variables);
  const finalExemptions = exemptionsOperations(employeeExemptions, dedeuctions, variables);
  const finalDeductions = deductionOperations(bunuses, dedeuctions, finalExemptions, variables);
  let employeeBeforeSalary = Object.assign(bunuses, finalExemptions, finalDeductions);
  employeeBeforeSalary = finalSalaryCalculation(employeeBeforeSalary);
  employeeBeforeSalary.date = date;
  return employeeBeforeSalary;
};

const salaryMain = async (date) => {
  const fixedVaribleResult = await fixedVarible.findAll();
  let variables = fixedVaribleResult[0].dataValues;
  variables = convertToCamelCase(variables);
  const employeesAfterBonus = await bonusQuery();
  const report = employeesAfterBonus.map(employe => salaryCalculations(employe, date, variables));
  const reports = await Promise.all(report);
  return reports;
};

module.exports = salaryMain;
