module.exports = (connection, sequelize) => {
  const purchaseBox = connection.define('purchase_box', {
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
  });
  return purchaseBox;
};
