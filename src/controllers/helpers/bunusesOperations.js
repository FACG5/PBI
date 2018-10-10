const convertToCamelCase = require('camelcase-keys-deep');

const bunusesOperations = (bonus, variables) => {
  const employeeBonus = convertToCamelCase(bonus);
  const { totalAllownace, salary } = bonus;
  const { dolar } = variables;
  const salaryAfterBonus = totalAllownace + salary;
  employeeBonus.salaryAfterBonus = totalAllownace + salary;
  employeeBonus.salaryAfterBonusNis = salaryAfterBonus * dolar;
  return employeeBonus;
};

module.exports = bunusesOperations;
