const convertToCamelCase = require('camelcase-keys-deep');
const bonusQuery = require('../../database/query/bonusQuery');
const deductionsQuery = require('../../database/query/deductionsQuery');
const exemptions = require('../../database/query/exemptions');
const deductionOperations = require('./deductionsOperations');
const exemptionsOperations = require('./exemptionsOperations');
const finalSalaryCalculation = require('../helpers/finalSalary');
const bunusesOperations = require('./bunusesOperations');

const { fixedVarible } = require('../../database/models');

const towDecimalNumber = (employee) => {
  Object.keys(employee).map((key) => {
    const value = employee[key];
    if (typeof value === 'number' && value % 1 !== 0) employee[key] = employee[key].toFixed(2);
    employee[key] = employee[key];
  });
  return employee;
};

const salaryCalculations = async (employee, date, variables) => {
  const bonus = convertToCamelCase(employee);
  const bunuses = bunusesOperations(bonus, variables);
  const dedeuctions = await deductionsQuery(bunuses);
  const employeeExemptions = await exemptions(bunuses);
  const finalExemptions = exemptionsOperations(employeeExemptions, dedeuctions, variables);
  const finalDeductions = deductionOperations(bunuses, dedeuctions, finalExemptions, variables);
  const employeeBeforeSalary = Object.assign(bunuses, finalExemptions, finalDeductions);
  const employeeAfterSalary = finalSalaryCalculation(employeeBeforeSalary);
  employeeAfterSalary.date = date;
  return towDecimalNumber(employeeAfterSalary);
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
