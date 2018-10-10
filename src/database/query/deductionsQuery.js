const sequelize = require('../config/connection');

const deductionsQuery = async (employee) => {
  const { employeeId } = employee;
  const result = await sequelize.query(
    'select deductions_health_insurance,deductions_loans,deductions_social_fund,(salary*(select saving_ratio from fixed_varibles where id = 1)) AS saving ,(select coalesce (SUM(payment),0) AS purchase_boxes from purchases_employees where employee_id = :employeeId )from employees where id = :employeeId', { replacements: { employeeId } },
  );
  return result[0][0];
};

module.exports = deductionsQuery;
