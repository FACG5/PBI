const { employee } = require('../database/models');

exports.get = (request, response) => {
  employee
    .findAll({
      attributes: [
        'name',
        ['id_number', 'idNumber'],
        ['job_title', 'jobTitle'],
        'class',
      ],
    })
    .then((result) => {
      response.render('employees', {
        result,
        cssFile: ['tables'],
        title: 'قائمة الموظفين',
      });
    });
};
