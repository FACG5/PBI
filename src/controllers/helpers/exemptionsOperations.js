const convertToCamelCase = require('camelcase-keys-deep');

const exemptionsOperations = (exemptions, afterDeductions, variables) => {
  const { savings, deductions_social_fund: deductionsSocialFund } = afterDeductions;
  const employeeExemptions = convertToCamelCase(exemptions);
  const { dolar } = variables;
  employeeExemptions.boxesExemptions = (deductionsSocialFund + savings) * dolar;
  employeeExemptions.totalExemptions = employeeExemptions.exemptionUniversity
      + employeeExemptions.exemptionHouse
      + employeeExemptions.exemptionResident + employeeExemptions.transportationsExemptions
      + employeeExemptions.boxesExemptions;
  return employeeExemptions;
};

module.exports = exemptionsOperations;
