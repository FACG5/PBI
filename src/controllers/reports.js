const {
  certificate,
  employee,
  fixedVarible,
  purchaseBox,
  purchasesEmployee,
  report,
} = require('../database/models');
const convertToCamelCase = require('camelcase-keys-deep');
const { bonus, deductions } = require('../functions/index');

exports.get = (req, res) => {
  res.render('reports', { cssFile: ['reports'], jsFile: ['reports'] });
};

exports.post = (req, res) => {
  fixedVarible.findAll().then((fixedVaribleResult) => {
    const variables = fixedVaribleResult[0].dataValues;
    variablesToCamel = convertToCamelCase(variables);
    employee.findAll().then((employeeResult) => {
      const employeeResultRows = [];
      employeeResult.forEach((employeeElement) => {
        const convertedEmployeeElement = convertToCamelCase(
          employeeElement.dataValues,
        );
        employeeResultRows.push(convertedEmployeeElement);
      });
      employeeResultRows.forEach((employeeElement) => {
        bonus(employeeElement).then((employeeAfterBonus) => {
          deductions(employeeElement, employeeAfterBonus, variablesToCamel).then((employeeAfterDeductions) => {

          });
        });
      });
    });
  });
};
