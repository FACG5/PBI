const { employee } = require('./../database/models');

exports.put = async (req, res, next) => {
  try {
    const targetEmployee = await employee.findById(req.body.id);
    await targetEmployee.updateAttributes(req.body);
    res.send({ err: null, message: 'تم تحديث معلومات الموظف بنجاح' });
  } catch (err) {
    next(err);
  }
};
