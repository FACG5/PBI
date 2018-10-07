const { employee } = require('../database/models');
const convertSnakeToCamel = require("./helper/convertSnakeToCamel");

exports.get = async (req, res) => {
  try {
    let employeeData = (await employee.findById(req.params.id)).dataValues;
    employeeData = convertSnakeToCamel(employeeData);
    res.render('employeeDetails', { obj: employeeData, id: req.params.id, cssFile: ['employeeDetails'], jsFile: ['employeeDetails'] });
  } catch (error) {
    res.sendStatus(404);
  }
};
