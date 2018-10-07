const convertToCamelCase = require('camelcase-keys-deep');
const taxes = require('./taxes');

const contributionsOperations = (bonus, contributionEmployee, contributionInstitute) => {
  const {
    salary,
    childAllownace,
    wifeAllowance,
    transportation,
    allowanceGasoline,
    allowanceMobile,
    allowanceJerusalem,
  } = bonus;

  const contributionOfInstitute = (salary
    + wifeAllowance
    + childAllownace
    + allowanceGasoline
    + allowanceMobile
    + transportation
    + allowanceJerusalem)
  * contributionInstitute;
  const contributionOfEmployee = (childAllownace
    + wifeAllowance
    + allowanceGasoline
    + transportation
    + allowanceMobile
    + allowanceJerusalem
    + salary)
  * contributionEmployee;
  const contributions = { contributionOfInstitute, contributionOfEmployee };
  return contributions;
};

const deductionOperations = (bonus, deductions, finalExemptions, variables) => {
  const { salary, totalAllownace } = bonus;
  const { contributionEmployee, contributionInstitute, dolar } = variables;
  let employeeDeductions = deductions;

  employeeDeductions.salaryTaxes = (salary + totalAllownace) * dolar - finalExemptions.totalExemptions;
  employeeDeductions = taxes(employeeDeductions);
  employeeDeductions = convertToCamelCase(employeeDeductions);

  employeeDeductions.totalTaxes = employeeDeductions.sectionTaxesTotal / dolar;
  const {
    totalTaxes,
    deductionsSocialFund,
    saving,
    deductionsHealthInsurance,
    deductionsLoans,
    purchaseBoxes,
  } = employeeDeductions;
  const { contributionOfInstitute, contributionOfEmployee } = contributionsOperations(bonus, contributionEmployee, contributionInstitute);
  employeeDeductions.contributionOfEmployee = contributionOfEmployee;
  employeeDeductions.contributionOfInstitute = contributionOfInstitute;
  employeeDeductions.totalDeductions = totalTaxes
      + deductionsHealthInsurance
      + saving
      + contributionOfEmployee
      + deductionsSocialFund
      + deductionsLoans
      + purchaseBoxes;
  return employeeDeductions;
};

module.exports = deductionOperations;
