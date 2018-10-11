const { employee } = require('../database/models');
const convertSnakeToCamel = require('./helpers/convertSnakeToCamel');
const bonusQueryOneEmployee = require('./../database/query/bonusQueryOneEmployee');
const deductionsQuery = require('./../database/query/deductionsQuery');
const exemptions = require('./../database/query/exemptions');
const purchasesEmployees = require('../database/query/purchaseEmployees');
const certficates = require('../database/models/certificate');

exports.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeData = await employee.findById(id, { include: [certficates] });
    if (!employeeData) {
      return res.render('employeeDetails', {
        err: 'Employee Not Found',
        cssFile: ['employeeDetails', 'cart'],
        jsFile: ['employeeDetails'],
        title: 'تفاصيل الموظف ',
      });
    }
    const employeeDataCamel = convertSnakeToCamel(employeeData.dataValues);
    const bonus = await bonusQueryOneEmployee(id);
    const bonusEmployee = convertSnakeToCamel(bonus[0]);
    const deductionsData = await deductionsQuery({ employeeId: id });
    const deductions = convertSnakeToCamel(deductionsData);
    const exemptionsData = await exemptions({ employeeId: id, totalAllownace: bonusEmployee.totalAllownace });
    const exemption = convertSnakeToCamel(exemptionsData);
    const purchasesEmployeesResult = await purchasesEmployees(id);
    
    res.locals.cssFile = ['employeeDetails', 'cart'];
    res.locals.jsFile = ['employeeDetails'];
    res.locals.title = 'تفاصيل الموظف';
    res.locals.err = null;

    return res.render('employeeDetails', {
      purchasesEmployeesResult,
      obj: employeeDataCamel,
      id: req.params.id,
      objBouns: bonusEmployee,
      objDeductions: deductions,
      objExemption: exemption,
      activePage: { employee: true },
    });
  } catch (err) {
    return next(err);
  }
};
