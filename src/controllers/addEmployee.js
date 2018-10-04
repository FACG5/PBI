const employees = require('../database/models/employee');

exports.get = (request, response) => {
  response.render('addEmployee', { cssFile: ['employees', 'swal'], jsFile: ['addEmployee', 'dd'] });
};

exports.post = (request, response, next) => {
  const newEmployeeData = request.body;
  employees
    .findAll({ where: { id_number: newEmployeeData.id_number } })
    .then((result) => {
      if (result.length === 0) {
        employees
          .create(newEmployeeData)
          .then(() => {
            response.status(200).send(JSON.stringify({ err: null, message: 'تم إدخال الموظف بنجاح , سيتم تحويلك  إلى قائمة الموظفين ' }));
          })
          .catch(err => next(err));
      } else {
        response.status(401).send(JSON.stringify({ err: 'تعذر الإدخال , رقم الهوية مستخدم مسبقا ! ' }));
      }
    }).catch(err => next(err));
};
