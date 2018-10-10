const validator = require('validator');
const fixedVariables = require('../database/models/fixedVarible');

exports.get = (req, res, next) => {
  fixedVariables.findAll(
    {
      attributes:
      ['dolar', ['exemption_resident', 'exemptionResident'],
        ['tax_value', 'taxValue'], ['contribution_institute', 'contributionInstitute'],
        ['contribution_employee', 'contributionEmployee'], ['saving_ratio', 'savingRatio']],
    },
  ).then((result) => {
    res.render('generalSettings', {
      result, cssFile: ['generalSettings'], jsFile: ['generalSetting'], activePage: { generalSetting: true }, title: 'إعدادات عامة',
    });
  }).catch(err => next(err));
};

exports.post = (req, res, next) => {
  const input = req.body;
  let validationValue = true;
  Object.values(input).forEach((value) => {
    if (!validator.isNumeric(value)) {
      validationValue = false;
    }
  });
  if (validationValue === true) {
    try {
      fixedVariables.findAll({ where: { id: 1 } }).then((result) => {
        if (!result.length) {
          fixedVariables
            .create(input)
            .then(() => {
              res.send(
                JSON.stringify({ err: null, message: 'تم إنشاء البيانات بنجاح' }),
              );
            });
        } else {
          fixedVariables
            .update(input, { where: { id: 1 } })
            .then(() => {
              res.send(
                JSON.stringify({
                  err: null,
                  message: 'تم تحديث البيانات بنجاح',
                  title: 'إعدادات عامة',
                }),
              );
            });
        }
      });
    } catch (err) {
      next(err);
    }
  } else {
    res.send(
      JSON.stringify({ err: 'يجب ادخال رقم' }),
    );
  }
};
