const reportsTable = require('../../../database/models/report');

const getReports = async (date) => {
  const dataset = [{}];
  const reports = await reportsTable.findAll({ where: { date } });
  reports.map((report) => {
    dataset.push(report.dataValues);
  });
  return dataset;
};

module.exports = getReports;
