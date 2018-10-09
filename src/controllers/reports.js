const salaryMain = require('./helpers/salaryMain');
const excelMain = require('./helpers/excelSheets/excelSheetMain');

const { report } = require('../database/models');

exports.get = (req, res) => {
  res.render('reports', { cssFile: ['reports'], jsFile: ['reports'] });
};

exports.post = async (req, res) => {
  const { dateValue } = req.body;
  const reports = await salaryMain(dateValue);
  reports.map(reportElement => report.upsert(reportElement));
};

exports.downloadExcel = async (req, res) => {
  const { date } = req.params;
  const reports = await excelMain(date);
  res.send(reports);
};
