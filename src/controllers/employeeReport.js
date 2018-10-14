const convertToCamelCase = require('camelcase-keys-deep');
const convertToSnakeCase = require('snakecase-keys');
const report = require('../database/models/report');
const employee = require('../database/models/employee');

exports.get = async (request, response, next) => {
  console.log(request.query);
  
  try {
    const columnsName = convertToSnakeCase(request.query);
    const { id, date } = request.query;
    const arr = Object.keys(columnsName);
    arr.push('salary', 'total_allownace', 'total_deductions', 'final_salary');
    const employeeResult = await employee.find({ where: { id } });
    const reportResult = await report.find(
      { where: { date, employee_id: id }, attributes: arr },
    );
    if (reportResult) {
      const employe = convertToCamelCase(employeeResult.dataValues);
      const reportt = convertToCamelCase(reportResult.dataValues);
      response.render('employeeReport', {
        employe,
        reportt,
        layout: 'employeeReport',
        cssFile: ['employeeReport'],
        jsFile: ['employeeReport'],
        title: ` تقرير الموظيف ${employeeResult.name}`,
      });
    }
  } catch (err) {
    next(err);
  }
};
