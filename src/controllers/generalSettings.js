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
    res.render('generalSettings', { result, cssFile: ['generalSettings'] });
  }).catch(err => next(err));
};

exports.post = (req, res) => {
  const input = req.body;
  fixedVariables.update(input, { where: { id: 1 } }).then(() => {
    res.redirect('/generalSetting');
  });
};
