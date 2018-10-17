const { employee } = require('../database/models');
const convertSnakeToCamel = require('./helpers/convertSnakeToCamel');
const bonusQueryOneEmployee = require('./../database/query/bonusQueryOneEmployee');
const deductionsQuery = require('./../database/query/deductionsQuery');
const exemptions = require('./../database/query/exemptions');
const purchasesEmployees = require('../database/query/purchaseEmployees');
const certficates = require('../database/models/certificate');
const report = require('../database/models/report');
const exemptionOpertation = require('./helpers/exemptionsOperations');
const deductionOperations = require('./helpers/deductionsOperations');
const variables = require('../database/models/fixedVarible');

exports.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeReports = await report.findAll({ attributes: ['date'], where: { employee_id: id } });    
    const employeeData = await employee.findById(id, { include: [certficates] });
    if (!employeeData) {
      return res.render('employeeDetails', {
        err: 'Employee Not Found',
        cssFile: ['employeeDetails', 'cart'],
        jsFile: ['employeeDetails'],
        title: 'تفاصيل الموظف ',
      });
    }
    const variablesData = await variables.findById(1);
    const variablesDataCamel = convertSnakeToCamel(variablesData.dataValues);
    const employeeDataCamel = convertSnakeToCamel(employeeData.dataValues);
    const bonus = await bonusQueryOneEmployee(id);
    const bonusEmployee = convertSnakeToCamel(bonus[0]);
    const deductionsData = await deductionsQuery({ employeeId: id });
    const deductions = convertSnakeToCamel(deductionsData);
    const exemptionsData = await exemptions({ employeeId: id, totalAllownace: bonusEmployee.totalAllownace });
    const exemptionOpertationData = exemptionOpertation(exemptionsData, deductionsData, variablesDataCamel);    
    const finalDeductions =  deductionOperations(bonusEmployee, deductions, exemptionOpertationData, variablesDataCamel);
    const purchasesEmployeesResult = await purchasesEmployees(id);
    
    res.locals.cssFile = ['employeeDetails', 'cart'];
    res.locals.jsFile = ['employeeDetails'];
    res.locals.title = 'تفاصيل الموظف';
    res.locals.err = null;
    return res.render('employeeDetails', {
      employeeReports,
      purchasesEmployeesResult,
      obj: employeeDataCamel,
      id: req.params.id,
      objBouns: bonusEmployee,
      objDeductions: finalDeductions,
      objExemption: exemptionOpertationData,
      activePage: { employee: true },
    });
  } catch (err) {
    return next(err);
  }
};
