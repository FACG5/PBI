const sequelize = require('../config/connection');

const purchaseEmployees = async (employeeId) => {
  const boxexResult = await sequelize.query('select * from purchase_boxes');

  const resultOfMap = boxexResult[0].map(async (box) => {
    const boxId = box.id;
    const boxName = box.name;
    const paymentResult = await sequelize.query(
      `select * from purchases_employees join
        purchase_boxes ON purchase_boxes.id = purchases_employees."purchaseBox_id" 
        where purchases_employees.employee_id = :employeeId and 
        purchases_employees."purchaseBox_id" =:boxId`,
      { replacements: { employeeId, boxId } },
    );
    let result = {};
    if (paymentResult[0].length) {
      result = paymentResult[0][0];
    } else {
      result = {
        payment: 0,
        employee_id: employeeId,
        purchaseBox_id: boxId,
        name: boxName,
      };
    }
    return result;
  });

  const finalResult = await Promise.all(resultOfMap);
  return finalResult;
};

module.exports = purchaseEmployees;
