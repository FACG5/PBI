const { employee } = require('../database/models');
const convertSnakeToCamel = require('./helpers/convertSnakeToCamel');
const bonusQueryOneEmployee = require('./../database/query/bonusQueryOneEmployee');
const deductionsQuery = require('./../database/query/deductionsQuery');
const exemptions = require('./../database/query/exemptions');
const purcasePayment = require('../database/query/purchasesEmployesValues');
const purchasesEmployee = require('../database/models/purchasesEmployee');

exports.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeData = await employee.findById(id);
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
  const purcasePayment = purcasePayment(id);

    res.locals.cssFile = ['employeeDetails', 'cart'];
    res.locals.jsFile = ['employeeDetails'];
    res.locals.title = 'تفاصيل الموظف';
    res.locals.err = null;


    return res.render('employeeDetails', {
      // purchaseBoxValues,
      obj: employeeDataCamel,
      id: req.params.id,
      objBouns: bonusEmployee,
      objDeductions: deductions,
      objExemption: exemption,
      activePage: { employee: true },
      // carts,
    });
  } catch (err) {
    return next(err);
  }
};
