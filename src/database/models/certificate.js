
module.exports = (connection, sequelize) => {
  const certificate = connection.define('certificate', {
    name: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'الرجاء ادخال اسم الشهادة',
        },
      },
    },
    link: {
      type: sequelize.TEXT,
      allowNull: true,
    },
  });
  certificate.associate = (models) => {
    certificate.belongsTo(models.employee);
  };
  return certificate;
};
