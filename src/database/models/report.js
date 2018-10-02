module.exports = (connection, sequelize) => {
  const report = connection.define('report', {
    name: {
      type: sequelize.STRING,
      defaultValue: '',
    },
    id_number: {
      type: sequelize.STRING,
      unique: true,
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
    purchase_boxes: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    savings: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    Institute_contribution: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    employee_contribution: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    total_Deductions: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    final_salary: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    exemption_university: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    exemption_transportation: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    exemption_boxes: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    exemption_total: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    salary_taxes: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    section_taxes_1: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    section_taxes_2: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    section_taxes_3: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    section_taxes_total: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    total_contribution: {
      type: sequelize.DOUBLE,
      defaultValue: 0.0,
    },
    date: {
      type: sequelize.DATEONLY,
    },
  });

  report.associate = (models) => {
    report.belongsTo(models.employee);
  };

  return report;
};
