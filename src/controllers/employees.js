const { employee } = require('../database/models');

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
