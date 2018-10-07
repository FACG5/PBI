const fixedVariables = require('../database/models/fixedVarible');

exports.get = (req, res) => {
  fixedVariables.findAll(
    {
      attributes:
      ['dolar', ['exemption_resident', 'exemptionResident'],
        ['tax_value', 'taxValue'], ['contribution_institute', 'contributionInstitute'],
        ['contribution_employee', 'contributionEmployee'], ['saving_ratio', 'savingRatio']],
    },
  ).then((result) => {
    res.render('generalSettings', { result, cssFile: ['generalSettings'], jsFile: ['generalSetting'] });
  });
};

exports.post = (req, res, next) => {
  const input = req.body;
  fixedVariables.findAll({ where: { id: 1 } }).then((result) => {
    if (!result.length) {
      fixedVariables.create(input).then(() => {
        res.send(JSON.stringify({ err: null, message: 'تم إنشاء البيانات بنجاح' }));
      }).catch(err => next(err));
    } else {
      fixedVariables.update(input, { where: { id: 1 } }).then(() => {
        res.send(JSON.stringify({ err: null, message: 'تم تحديث البيانات بنجاح' }));
      }).catch(err => next(err));
    }
  });
};
