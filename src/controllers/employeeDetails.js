const { employee } = require('../database/models');
const convertSnakeToCamel = require('./helpers/convertSnakeToCamel');

exports.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeData = await employee.findById(id);
    if (!employeeData) {
      res.render('employeeDetails', {
        err: 'Employee Not Found',
        cssFile: ['employeeDetails'],
        jsFile: ['employeeDetails'],
        title: 'تفاصيل الموظف ',
      });
    } else {
      const employeeDataCamel = convertSnakeToCamel(employeeData.dataValues);
      res.render('employeeDetails', {
        err: null,
        obj: employeeDataCamel,
        id: req.params.id,
        cssFile: ['employeeDetails'],
        jsFile: ['employeeDetails'],
        activePage: { employee: true },
      });
    }
  } catch (err) {
    next(err);
  }
};
