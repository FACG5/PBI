const reportsTable = require('../../../database/models/report');

const getReports = date => new Promise((resolve, reject) => {
  const dataset = [{}];
  reportsTable
    .findAll({ where: { date } })
    .then((reports) => {
      reports.map((report) => {
        dataset.push(report.dataValues);
      });
    })
    .then(() => {
      resolve(dataset);
    });
});

module.exports = getReports;
