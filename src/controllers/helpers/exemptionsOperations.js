const exemptionsOperations = (exemptions, afterDeductions, variables) => {
  const { saving, deductions_social_fund: deductionsSocialFund } = afterDeductions;
  const employeeExemptions = exemptions;
  const { dolar } = variables;
  employeeExemptions.boxesExemptions = (deductionsSocialFund + saving) * dolar;
  employeeExemptions.totalExemptions = employeeExemptions.exemptionUniversity
      + employeeExemptions.exemptionHouse
      + employeeExemptions.exemptionResident + employeeExemptions.transportationsExemptions
      + employeeExemptions.boxesExemptions;
  return employeeExemptions;
};

module.exports = exemptionsOperations;
