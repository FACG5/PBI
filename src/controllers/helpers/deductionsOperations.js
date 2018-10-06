const convertToCamelCase = require('camelcase-keys-deep');

const deductionOperations = (
  afterBonus,
  afterDeductions,
  finalExemptions,
  variables,
) => new Promise((resolve) => {
  const {
    salary,
    childAllownace,
    wifeAllowance,
    transportation,
    allowanceGasoline,
    allowanceMobile,
    allowanceJerusalem,
    totalAllownace,
  } = afterBonus;

  const { contributionEmployee, contributionInstitute, dolar } = variables;
  let employeeDeductions = afterDeductions;

  const employeeContribution = (childAllownace
        + wifeAllowance
        + allowanceGasoline
        + transportation
        + allowanceMobile
        + allowanceJerusalem
        + salary)
      * contributionEmployee;

  employeeDeductions.employeeContribution = employeeContribution;
  employeeDeductions.salaryTaxes = (salary + totalAllownace) * dolar - finalExemptions.totalExemptions;
  employeeDeductions.sectionTaxes1 = 0;
  employeeDeductions.sectionTaxes2 = 0;
  employeeDeductions.sectionTaxes3 = 0;
  if (employeeDeductions.salaryTaxes <= 6250) {
    employeeDeductions.sectionTaxes1 = employeeDeductions.salaryTaxes * 0.05;
  }
  if (
    employeeDeductions.salaryTaxes > 6250
      && employeeDeductions.salaryTaxes <= 12500
  ) {
    employeeDeductions.sectionTaxes1 = 6250 * 0.05;
    employeeDeductions.sectionTaxes2 = (employeeDeductions.salaryTaxes - 6250) * 0.1;
  }
  if (employeeDeductions.salaryTaxes > 12500) {
    employeeDeductions.sectionTaxes1 = 6250 * 0.05;
    employeeDeductions.sectionTaxes2 = 6250 * 0.1;
    employeeDeductions.sectionTaxes3 = (employeeDeductions.salaryTaxes - 12500) * 0.15;
  }
  employeeDeductions.sectionTaxesTotal = employeeDeductions.sectionTaxes1
      + employeeDeductions.sectionTaxes2
      + employeeDeductions.sectionTaxes3;
  employeeDeductions = convertToCamelCase(employeeDeductions);
  employeeDeductions.contributionInstitute = (salary
        + wifeAllowance
        + childAllownace
        + allowanceGasoline
        + allowanceMobile
        + transportation
        + allowanceJerusalem)
      * contributionInstitute;
  employeeDeductions.totalTaxes = employeeDeductions.sectionTaxesTotal / dolar;
  const {
    totalTaxes,
    deductionsSocialFund,
    saving,
    deductionsHealthInsurance,
    deductionsLoans,
    purchaseBoxes,
  } = employeeDeductions;
  employeeDeductions.totalDeductions = totalTaxes
      + deductionsHealthInsurance
      + saving
      + employeeContribution
      + deductionsSocialFund
      + deductionsLoans
      + purchaseBoxes;
  resolve(employeeDeductions);
});

module.exports = deductionOperations;
