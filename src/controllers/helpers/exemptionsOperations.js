const exemptionsOperations = (exemptions, afterDeductions, variables) => new Promise((resolve) => {
  const { saving, deductions_social_fund: deductionsSocialFund } = afterDeductions;
  const employeeExemptions = exemptions;
  const { dolar } = variables;
  employeeExemptions.boxesExemptions = (deductionsSocialFund + saving) * dolar;
  employeeExemptions.totalExemptions = employeeExemptions.exemptionUniversity
      + employeeExemptions.exemptionHouse
      + employeeExemptions.exemptionResident + employeeExemptions.transportationsExemptions
      + employeeExemptions.boxesExemptions;
  resolve(employeeExemptions);
});
module.exports = exemptionsOperations;
