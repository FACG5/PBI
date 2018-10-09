const salaryMain = require('./helpers/salaryMain');
const { report } = require('../database/models');

exports.get = (req, res) => {
  res.render('reports', {
    cssFile: ['reports'], jsFile: ['reports'], activePage: { reports: true }, title: 'تقارير الموظفين',
  });
};

exports.post = async (req, res) => {
  const { dateValue } = req.body;
  const reports = await salaryMain(dateValue);
  reports.map(reportElement => report.upsert(reportElement));
};
