const convertToCamelCase = require('camelcase-keys-deep');
const bonusQuery = require('../../database/query/bonusQuery');
const deductionsQuery = require('../../database/query/deductionsQuery');
const exemptions = require('../../database/query/exemptions');
const deductionOperations = require('../helpers/deductionsOperations');
const exemptionsOperations = require('../helpers/exemptionsOperations');
const finalSalaryCalculation = require('../helpers/finalSalary');
const { fixedVarible } = require('../../database/models');

const salaryCalculations = async (employee, date, variables) => {
  const bonus = convertToCamelCase(employee);
  const dedeuctions = await deductionsQuery(bonus);
  const employeeExemptions = await exemptions(bonus);
  const finalExemptions = await exemptionsOperations(employeeExemptions, dedeuctions, variables);
  const finalDeductions = await deductionOperations(bonus, dedeuctions, finalExemptions, variables);
  let employeeBeforeSalary = Object.assign(bonus, finalExemptions, finalDeductions);
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
