const { employee } = require('./../database/models');
const updatePurchase = require('../database/query/updatePurchase');

exports.put = async (req, res, next) => {
  try {
    const { payment, id } = req.body;
    if (payment) {
      updatePurchase(payment, id);
    }
    const targetEmployee = await employee.findById(id);
    await targetEmployee.updateAttributes(req.body);
    res.send({ err: null, message: 'تم تحديث معلومات الموظف بنجاح' });
  } catch (err) {
    next(err);
  }
};
