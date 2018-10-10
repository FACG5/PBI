const { employee } = require('../database/models');
const convertSnakeToCamel = require('./helpers/convertSnakeToCamel');
const bonusQueryOneEmployee = require('./../database/query/bonusQueryOneEmployee');
const deductionsQuery = require('./../database/query/deductionsQuery');
const exemptions = require('./../database/query/exemptions');

exports.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeData = await employee.findById(id);
    const employeeDataCamel = convertSnakeToCamel(employeeData.dataValues);
    const bonus = await bonusQueryOneEmployee(id);
    const bonusEmployee = convertSnakeToCamel(bonus[0]);
    const deductionsData = await deductionsQuery({ employeeId: id });
    const deductions = convertSnakeToCamel(deductionsData);

    const exemptionsData = await exemptions({ employeeId: id, totalAllownace: bonusEmployee.totalAllownace });
    const exemption = convertSnakeToCamel(exemptionsData);

    res.locals.cssFile = ['employeeDetails'];
    res.locals.jsFile = ['employeeDetails'];
    res.locals.title = 'تفاصيل الموظف';
    res.locals.err = null;

    if (!employeeData) {
      return res.render('employeeDetails', {
        err: 'Employee Not Found',
      });
    }
    return res.render('employeeDetails', {
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
