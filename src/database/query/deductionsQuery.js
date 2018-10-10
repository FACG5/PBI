const sequelize = require('../config/connection');

const deductionsQuery = async (employee, variables) => {
  const { savingRatio } = variables;
  const { employeeId } = employee;
  const result = await sequelize.query(
    `select deductions_health_insurance,deductions_loans,deductions_social_fund,(salary*${savingRatio}) AS saving ,(select coalesce (SUM(payment),0) AS purchase_boxes from purchases_employees where employee_id = ${employeeId})`
      + `from employees where id = ${employeeId}`,
  );
  const employeeDeductions = result[0][0];
  return employeeDeductions;
};

module.exports = deductionsQuery;
