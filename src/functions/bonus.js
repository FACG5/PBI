
module.exports = employeeElement => new Promise((resolve) => {
  const salariesAfterBounus = [];
  const bonusResult = {};
  bonusResult.children = 15 * employeeElement.children;
  if (bonusResult.children > 60) bonusResult.children = 60;
  if (employeeElement.wife === true) {
    bonusResult.wife = 0;
  } else {
    bonusResult.wife = 30;
  }
  bonusResult.allowanceGasoline = employeeElement.allowanceGasoline;
  bonusResult.transportation = employeeElement.transportation;
  bonusResult.allowanceMobile = employeeElement.allowanceMobile;
  bonusResult.allowanceWork = employeeElement.allowanceWork;
  bonusResult.allowanceJerusalem = employeeElement.allowanceJerusalem;
  bonusResult.annualRate = employeeElement.annualRate;
  bonusResult.salary = employeeElement.salary;
  const salaryAfterBonus = employeeElement.allowanceWork + employeeElement.salary
  + employeeElement.allowanceGasoline
  + employeeElement.transportation + employeeElement.allowanceMobile
  + employeeElement.allowanceJerusalem + (employeeElement.salary * employeeElement.annualRate);
  bonusResult.salaryAfterBonus = salaryAfterBonus;
  salariesAfterBounus.push(bonusResult);
  resolve(salariesAfterBounus);
});
