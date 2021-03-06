const salaryMain = require('./helpers/salaryMain');
const excelMain = require('./helpers/excelSheets/excelSheetMain');

const { report } = require('../database/models');

exports.get = (req, res) => {
  res.render('reports', {
    cssFile: ['reports'],
    jsFile: ['reports'],
    activePage: { reports: true },
    title: 'تقارير الموظفين',
  });
};

exports.post = async (req, res, next) => {
  const { dateValue } = req.body;
  try {
    const reports = await salaryMain(dateValue);
    reports.map((reportElement) => {
      report
        .findAll({
          where: { id_number: reportElement.id_number, date: dateValue },
        })
        .then((result) => {
          if (result.length) {
            return report.update(reportElement, {
              where: { id_number: reportElement.id_number, date: dateValue },
            });
          }
          return report.create(reportElement);
        });
    });
    res.send({ err: null, message: '' });
  } catch (err) {
    next(err);
  }
};

exports.downloadExcel = async (req, res, next) => {
  try {
    const { date } = req.params;
    const reports = await excelMain(date);
    res.send(reports);
  } catch (err) {
    next(err);
  }
};
