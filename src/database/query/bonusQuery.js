const sequelize = require('../config/connection');

const bonusQuery = () => new Promise((resolve, reject) => {
  sequelize.query('select id, name,id_number,salary ,CASE WHEN children>4 THEN 60 ELSE children*15 END AS Child_Allownace,'
+ 'CASE WHEN wife = true THEN 0 ELSE 30 END AS wife_allowance, transportation,allowance_gasoline,'
+ 'allowance_mobile,allowance_work,allowance_jerusalem, CASE WHEN children>4 THEN 60 ELSE children*15 END +'
+ '(CASE WHEN wife = true THEN 0 ELSE 30 END) + transportation+ allowance_gasoline+allowance_mobile+allowance_work+allowance_jerusalem +'
+ '(annual_rate*salary)  AS total_allownace from employees')
    .then((result) => {
      resolve(result[0]);
    })
    .catch(err => reject(err));
});

module.exports = bonusQuery;
