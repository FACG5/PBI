module.exports = (connection, sequelize) => {
  const admin = connection.define('admin', {
    username: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4, 10],
          msg: 'رجاء ادخال اسم اكبر من 4 احرف',
        },
      },
    },
    password: {
      type: sequelize.TEXT,
      allowNull: false,
    },
  });

  return admin;
};
