const { employee } = require('./../database/models');

exports.put = async (req, res) => {
  try {
    const targetEmployee = await employee.findById(req.body.id);
    await targetEmployee.updateAttributes(req.body);
    res.send({ err: null, data: 'Done' });
  } catch (err) {
    res.send({ err, data: null });
  }
};
