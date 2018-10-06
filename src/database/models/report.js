const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const report = sequelize.define('report', {
  name: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  id_number: {
    type: Sequelize.STRING,
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
  },
  class: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
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
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.now,
  },
  points: {
    type: Sequelize.INTEGER,
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
  exemption_house: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  exemption_resident: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  purchase_boxes: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  savings: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  Institute_contribution: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  employee_contribution: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  total_deductions: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  final_salary: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  exemption_university: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  exemption_transportation: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  exemption_boxes: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  exemption_total: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  salary_taxes: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  section_taxes_1: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  section_taxes_2: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  section_taxes_3: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  section_taxes_total: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  total_contribution: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  date: {
    type: Sequelize.DATEONLY,
  },
});

module.exports = report;
