module.exports = (connection, sequelize) => {
  const employee = connection.define('employee', {
    name: {
      type: sequelize.STRING,
      validate: {
        notNull: {
          args: true,
          msg: 'رجاء ادخال اسم الموظف',
        },
      },
      defaultValue: '',
    },
    id_number: {
      type: sequelize.STRING,
      unique: true,
      notNull: true,
    },
    birthday: {
      type: sequelize.STRING,
      defaultValue: '',
    },
    location: {
      type: sequelize.STRING,
      defaultValue: '',
    },
    children: {
      type: sequelize.INTEGER,
      defaultValue: 0,
    },
    wife: {
      type: sequelize.BOOLEAN,
      defaultValue: false,
    },
    nationality: {
      type: sequelize.STRING,
      defaultValue: '',
    },
    salary: {
      type: sequelize.DOUBLE,
    },
    class: {
      type: sequelize.INTEGER,
      defaultValue: 1,
    },
    category: {
      type: sequelize.STRING,
      defaultValue: 'E',
    },
    supervisor: {
      type: sequelize.STRING,
      defaultValue: '',
    },
    job_title: {
      type: sequelize.STRING,
      defaultValue: '',
    },
    job_type: {
      type: sequelize.STRING,
      defaultValue: '',
    },
    job_description: {
      type: sequelize.STRING,
      defaultValue: '',
    },
    job_start: {
      type: sequelize.DATEONLY,
      defaultValue: sequelize.now,
    },
    points: {
      type: sequelize.INTEGER,
      defaultValue: 0,
    },
    transportation: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    allowance_gasoline: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    allowance_mobile: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    allowance_work: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    allowance_Jerusalem: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    annual_rate: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    Deductions_health_insurance: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    Deductions_loans: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    Deductions_social_fund: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    uxemption_university: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    exemption_house: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    exemption_resident: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
  });

  employee.associate = (models) => {
    employee.hasMany(models.report);
    employee.hasMany(models.certificate);
    employee.belongsToMany(models.purchaseBox, {
      through: {
        model: models.purchasesEmployee,
        unique: true,
      },
    });
  };
  return employee;
};
