const salaryMain = require('./helpers/salaryMain');
const { report } = require('../database/models');

exports.get = (req, res) => {
  res.render('reports', { cssFile: ['reports'], jsFile: ['reports'] });
};

exports.post = async (req, res) => {
  const { dateValue } = req.body;
  const reports = await salaryMain(dateValue);
  reports.map((reportElement) => {
    report.findAll({ where: { id_number: reportElement.id_number, date: dateValue } }).then((result) => {
      if (result.length) return report.update(reportElement, { where: { id_number: reportElement.id_number, date: dateValue } });
      return report.create(reportElement);
    });
  });
};
