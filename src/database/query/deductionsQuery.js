const sequelize = require('../config/connection');

const deductionsQuery = (employee, variables) => new Promise((resolve, reject) => {
  const { savingRatio } = variables;
  const { id } = employee;
  sequelize
    .query(
      `select deductions_health_insurance,deductions_loans,deductions_social_fund,(salary*${savingRatio}) AS savings ,(select coalesce (SUM(payment),0) AS purchase_boxes from purchases_employees where employee_id = ${id})`
          + `from employees where id = ${id}`,
    )
    .then((result) => {
      const employeeDeductions = result[0][0];
      resolve(employeeDeductions);
    })
    .catch(err => reject(err));
});

module.exports = deductionsQuery;
