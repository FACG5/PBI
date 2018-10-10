const employees = require('../database/models/employee');
const certifications = require('../database/models/certificate');

exports.get = (request, response) => {
  response.render('addEmployee', {
    cssFile: ['employees', 'swal'], jsFile: ['addEmployee'], title: 'إضافة موظف', activePage: { employee: true },
  });
};

exports.post = (request, response, next) => {
  const newEmployeeData = request.body;
  if (newEmployeeData.name.trim() && newEmployeeData.id_number.trim()) {
    employees
      .findAll({ where: { id_number: newEmployeeData.id_number } })
      .then((result) => {
        if (result.length === 0) {
          employees
            .create(newEmployeeData)
            .then((employee) => {
              if (Object.keys(newEmployeeData.certifications).length) {
                const { id } = employee.dataValues;
                const { cerficationName, path } = newEmployeeData.certifications;
                certifications.create({ name: cerficationName, employee_id: id, link: path }).then((result) => {       
                });
              }
              response.status(200).send(JSON.stringify({ err: null, message: 'تم إدخال الموظف بنجاح , سيتم تحويلك  إلى قائمة الموظفين ' }));
            })
            .catch(err => next(err));
        } else {
          response.status(401).send(JSON.stringify({ err: 'تعذر الإدخال , رقم الهوية مستخدم مسبقا ! ' }));
        }
      }).catch(err => next(err));
  } else {
    response.status(401).send(JSON.stringify({ err: 'الرجاء إدخال بيانات صحيحة !' }));
  }
};
