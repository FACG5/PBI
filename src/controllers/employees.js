const { employee, purchasesEmployee } = require('../database/models');

exports.get = (request, response, next) => {
  employee
    .findAll({
      attributes: [
        'id',
        'name',
        ['id_number', 'idNumber'],
        ['job_title', 'jobTitle'],
        'class',
      ],
    })
    .then((result) => {
      response.render('employees', {
        result, cssFile: ['tables'], jsFile: ['employees'], activePage: { employee: true }, title: 'قائمة الموظفين',
      });
    }).catch(err => next(err));
};

exports.reset = async (request, response, next) => {
  try {
    await purchasesEmployee.destroy({ where: {}, truncate: true });
    await employee.update({ allowance_work: 0 }, { where: {} });
    response.send({ err: null, message: 'done' });
  } catch (err) {
    next(err);
  }
};
