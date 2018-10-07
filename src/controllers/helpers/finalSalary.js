const convertToSnakeCase = require('snakecase-keys');
const convertToCamelCase = require('camelcase-keys-deep');

const finalSalaryCalculation = (employee) => {
  employee = convertToCamelCase(employee);
  const { totalDeductions, salary, totalAllownace } = employee;
  const finalSalary = (salary + totalAllownace) - totalDeductions;
  employee.finalSalary = finalSalary;
  const finalEmployee = convertToSnakeCase(employee);
  return finalEmployee;
};

module.exports = finalSalaryCalculation;
