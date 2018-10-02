module.exports = (connection, sequelize) => {
  const fixedVarible = connection.define('fixed_varible', {
    dolar: {
      type: sequelize.DOUBLE,
      defaultValue: 3.5794,
    },
    exemption_resident: {
      type: sequelize.DOUBLE,
      defaultValue: 3000.0,
    },
    tax_value: {
      type: sequelize.DOUBLE,
      defaultValue: 0.05,
    },
    contribution_institute: {
      type: sequelize.DOUBLE,
      defaultValue: 10.0,
    },
    contribution_employee: {
      type: sequelize.DOUBLE,
      defaultValue: 5.0,
    },
  });

  return fixedVarible;
};
