const excel = require('node-excel-export');
const convertToCamelCase = require('camelcase-keys-deep');
const heading = require('./heading');
const specification = require('./columns');
const getReports = require('./dataSet');
const merges = require('./merges');

const excelMain = date => new Promise((resolve, reject) => {
  getReports(date).then((reportResult) => {
    let data = [];
    data = reportResult.map(convertToCamelCase);
    const reportSheet = excel.buildExport([
      {
        name: 'Report',
        heading,
        merges,
        specification,
        data,
      },
    ]);
    resolve(reportSheet);
  });
});
module.exports = excelMain;
