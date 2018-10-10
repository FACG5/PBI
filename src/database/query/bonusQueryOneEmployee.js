const sequelize = require('../config/connection');

const bonusQueryOneEmployee = async (employeeId) => {
  const id = employeeId;
  const result = await sequelize.query('select id AS employee_id, name,id_number,salary ,CASE WHEN children>4 THEN 60 ELSE children*15 END AS child_allownace,'
+ 'CASE WHEN wife = true THEN 0 ELSE 30 END AS wife_allowance, transportation,allowance_gasoline,'
+ 'allowance_mobile,allowance_work,allowance_jerusalem,annual_rate, CASE WHEN children>4 THEN 60 ELSE children*15 END +'
+ '(CASE WHEN wife = true THEN 0 ELSE 30 END) + transportation+ allowance_gasoline+allowance_mobile+allowance_work+allowance_jerusalem +'
+ '(annual_rate*salary)  AS total_allownace from employees where id = :id', { replacements: { id } });
  return result[0];
};
module.exports = bonusQueryOneEmployee;
