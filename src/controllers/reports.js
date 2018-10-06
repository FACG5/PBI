const convertToCamelCase = require('camelcase-keys-deep');
const convertToSnakeCase = require('snakecase-keys');
const bonusQuery = require('../database/query/bonusQuery');
const deductionsQuery = require('../database/query/deductionsQuery');
const exemptions = require('../database/query/exemptions');
const deductionOperations = require('./helpers/deductionsOperations');
const exemptionsOperations = require('./helpers/exemptionsOperations');

const {
  certificate,
  employee,
  fixedVarible,
  purchaseBox,
  purchasesEmployee,
  report,
} = require('../database/models');

exports.get = (req, res) => {
  res.render('reports', { cssFile: ['reports'], jsFile: ['reports'] });
};

exports.post = (req, res) => {
  fixedVarible.findAll().then((fixedVaribleResult) => {
    let variables = fixedVaribleResult[0].dataValues;
    variables = convertToCamelCase(variables);
    bonusQuery().then((employeesAfterBonus) => {
      employeesAfterBonus.forEach((afterBonus) => {
        afterBonus = convertToCamelCase(afterBonus);
        deductionsQuery(afterBonus, variables).then(
          (afterDeductions) => {
            exemptions(afterBonus, variables).then((employeeExemptions) => {
              exemptionsOperations(
                employeeExemptions,
                afterDeductions,
                variables,
              ).then((finalExemptions) => {
                deductionOperations(
                  afterBonus,
                  afterDeductions,
                  finalExemptions,
                  variables,
                ).then((finalDeductions) => {
                  let finalEmployee = Object.assign(
                    afterBonus,
                    finalExemptions,
                    finalDeductions,
                  );
                  finalEmployee = convertToCamelCase(finalEmployee);
                  console.log(finalEmployee);
                });
              });
            });
            // finalEmployee = convertToCamelCase(finalEmployee);
            // const { totalDeductions, salary, totalAllownace } = finalEmployee;
            // const finalSalary = (salary + totalAllownace) - totalDeductions;
            // finalEmployee.finalSalary = finalSalary;
            // finalEmployee = convertToSnakeCase(finalEmployee);
            // report.create(finalEmployee).then(() => {
            //   console.log(55);
            // });
          },
        );
      });
    });
  });
};
