const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const employee = sequelize.define('employee', {
  name: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  id_number: {
    type: Sequelize.STRING,
    unique: true,
    notNull: true,
  },
  birthday: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  social_status: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  location: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  children: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  wife: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  nationality: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  salary: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  class: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  social_status: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  category: {
    type: Sequelize.STRING,
    defaultValue: 'E',
  },
  supervisor: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  job_title: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  job_type: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  job_description: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  job_start: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  points: {
    type: Sequelize.DOUBLE,
    defaultValue: 0,
  },
  transportation: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  allowance_gasoline: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  allowance_mobile: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  allowance_work: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  allowance_jerusalem: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  annual_rate: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  deductions_health_insurance: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  deductions_loans: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  deductions_social_fund: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  exemption_university: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  exemption_house: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  exemption_resident: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
});

module.exports = employee;
