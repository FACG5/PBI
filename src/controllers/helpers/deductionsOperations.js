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
  const totlaContribtuions = contributionOfInstitute + contributionOfEmployee;
  const contributions = { contributionOfInstitute, contributionOfEmployee, totlaContribtuions };
  return contributions;
};

const deductionOperations = (bonus, deductions, finalExemptions, variables) => {
  const { salary, totalAllownace, salaryAfterBonus } = bonus;
  const { contributionEmployee, contributionInstitute, dolar } = variables;
  let employeeDeductions = deductions;

  employeeDeductions.salaryTaxes = (salary + totalAllownace) * dolar - finalExemptions.totalExemptions;
  employeeDeductions = taxes(employeeDeductions, variables);
  employeeDeductions = convertToCamelCase(employeeDeductions);

  employeeDeductions.totalTaxes = employeeDeductions.sectionTaxesTotal / dolar;
  const {
    totalTaxes,
    deductionsSocialFund,
    savings,
    deductionsHealthInsurance,
    deductionsLoans,
    purchaseBoxes,
  } = employeeDeductions;

  const { contributionOfInstitute, contributionOfEmployee, totlaContribtuions } = contributionsOperations(bonus, contributionEmployee, contributionInstitute);
  employeeDeductions.contributionOfEmployee = contributionOfEmployee;
  employeeDeductions.contributionOfInstitute = contributionOfInstitute;
  employeeDeductions.totlaContribtuions = totlaContribtuions;
  const totalDeductions = totalTaxes
  + deductionsHealthInsurance
  + savings
  + contributionOfEmployee
  + deductionsSocialFund
  + deductionsLoans
  + purchaseBoxes;
  employeeDeductions.totalDeductions = totalDeductions;
  const salaryAfterDeduction = salaryAfterBonus - totalDeductions;
  employeeDeductions.salaryAfterDeduction = salaryAfterDeduction;
  employeeDeductions.salaryAfterDeductionNis = salaryAfterDeduction * dolar;

  return employeeDeductions;
};

module.exports = deductionOperations;
