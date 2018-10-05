module.exports = (employeeElement, employeeAfterBonus, variables) => new Promise((resolve) => {
  const salariesAfterDeductions = [];
  const {
    dolar, exemptionResident, taxValue, contributionInstitute, contributionEmployee, savingRatio,
  } = variables;

  const deductionsResult = {};

  deductionsResult.deductionsHealthInsurance = employeeElement.deductionsHealthInsurance;
  deductionsResult.deductionsLoans = employeeElement.deductionsLoans;
  deductionsResult.deductionsSocialFund = employeeElement.deductionsSocialFund;
  deductionsResult.saving = employeeAfterBonus.salary * savingRatio;
  deductionsResult.employee_contribution = (employeeAfterBonus.salary + employeeAfterBonus.wife
  + employeeAfterBonus.children + employeeAfterBonus.allowanceGasoline + employeeAfterBonus.allowanceMobile
  + employeeAfterBonus.transportation + employeeAfterBonus.allowanceJerusalem) * contributionEmployee;
  deductionsResult.annualRate = employeeAfterBonus.annualRate;
  deductionsResult.salary = employeeAfterBonus.salary;
  deductionsResult.salaryAfterBonus = salaryAfterBonus;
  salariesAfterDeductions.push(deductionsResult);

  resolve(salariesAfterBounus);
});
