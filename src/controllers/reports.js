const convertToCamelCase = require('camelcase-keys-deep');
const convertToSnakeCase = require('snakecase-keys');
const bonusQuery = require('../database/query/bonusQuery');
const deductionsQuery = require('../database/query/deductionsQuery');
const {
  certificate,
  employee,
  fixedVarible,
  purchaseBox,
  purchasesEmployee,
  report,
} = require('../database/models');
const { bonus, deductions } = require('../functions/index');

exports.get = (req, res) => {
  res.render('reports', { cssFile: ['reports'], jsFile: ['reports'] });
};

exports.post = (req, res) => {
  fixedVarible.findAll().then((fixedVaribleResult) => {
    const variables = fixedVaribleResult[0].dataValues;
    const variablesToCamel = convertToCamelCase(variables);
    bonusQuery().then((employeesAfterBonus) => {
      employeesAfterBonus.forEach((afterBonus) => {
        deductionsQuery(convertToCamelCase(afterBonus), variablesToCamel).then(
          (afterDeductions) => {
            let finalEmployee = Object.assign(afterBonus, afterDeductions);
            finalEmployee = convertToCamelCase(finalEmployee);
            const { totalDeductions, salary, totalAllownace } = finalEmployee;
            const finalSalary = (salary + totalAllownace) - totalDeductions;
            finalEmployee.finalSalary = finalSalary;
            finalEmployee = convertToSnakeCase(finalEmployee);
            console.log(finalEmployee);
            // report.create(finalEmployee).then(() => {
            //   console.log(55);
            // });
          },
        );
      });
    });
    // console.log(x);

    //     employee.q ().then((employeeResult) => {
    // employee.
    //     })
    //   const employeeResultRows = [];
    //   employeeResult.forEach((employeeElement) => {

    //     const convertedEmployeeElement = convertToCamelCase(
    //       employeeElement.dataValues,
    //     );
    //     employeeResultRows.push(convertedEmployeeElement);
    //   });
    //   const finalReports = [];
    //   employeeResultRows.forEach((employeeElement) => {
    //   employeeElement.
    // bonus(employeeElement).then((employeeAfterBonus) => {
    //   deductions(employeeElement, employeeAfterBonus, variablesToCamel)
    //     .then((employeeAfterDeductions) => {
    //       finalReports.push(Object.assign(employeeAfterBonus, employeeAfterDeductions));
    //     }).then(() => {
    //       finalReports.forEach((element) => {
    //         console.log(element);

    //         const reportInSnakeCase = convertToSnakeCasesnake(element);
    //         console.log(reportInSnakeCase);
    //       });
    //     });
    // });
    //   });
    // });
  });
};
