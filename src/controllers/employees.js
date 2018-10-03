const employees = require('../database/models/employee');

exports.get = (request, response) => {
  employees.findAll({ attributes: ['name', ['id_number', 'idNumber'], ['job_title', 'jobTitle'], 'class'] }).then((result) => {
    console.log(result);
    
    response.render('employees', { result, cssFile: 'tables' });
  });
};
