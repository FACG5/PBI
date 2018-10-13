const purchasesEmployee = require('../models/purchasesEmployee');

const updatePurchase = async (payment, employeeId) => {
  payment.map(async (paymentElement) => {
    const resultOfFound = await purchasesEmployee.find({
      where: { employee_id: employeeId, purchaseBox_id: paymentElement.id },
    });
    if (resultOfFound) {
      await resultOfFound.updateAttributes({
        payment: paymentElement.paymentValue,
      });
    } else {
      await purchasesEmployee.create({
        employee_id: employeeId,
        purchaseBox_id: paymentElement.id,
        payment: paymentElement.paymentValue,
      });
    }
  });
};

module.exports = updatePurchase;
