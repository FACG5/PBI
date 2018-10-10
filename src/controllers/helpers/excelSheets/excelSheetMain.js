const excel = require('node-excel-export');
const convertToCamelCase = require('camelcase-keys-deep');
const head = require('./heading');
const specification = require('./columns');
const getReports = require('./dataSet');
const merges = require('./merges');


const excelMain = async (date) => {
  const reportResult = await getReports(date);
  let data = [];
  data = reportResult.map(convertToCamelCase);
  const heading = head(date);
  const reportSheet = excel.buildExport([
    {
      name: 'Report',
      heading,
      merges,
      specification,
      data,
    },
  ]);
  return reportSheet;
};


module.exports = excelMain;
