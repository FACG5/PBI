const employees = require('../database/models/employee');

exports.get = (request, response) => {
  response.render('addEmployee', { cssFile: 'employees' });
};

exports.post = (request, response) => {
  const newEmployeeData = request.body;
  employees.create(newEmployeeData).then(() => {
    response.status(201).redirect('/employees');
  });
};
