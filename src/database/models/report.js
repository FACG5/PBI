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
  child_allownace: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  wife_allowance: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  salary: {
    type: Sequelize.DOUBLE,
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
  allowance_other: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  total_allownace: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  salary_after_bonus: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  salary_after_bonus_nis: {
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
  total_taxes: {
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
  employee_contribution: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  total_deductions: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  salary_after_deduction: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  salary_after_deduction_nis: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  totla_contribtuions: {
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
  transportations_exemptions: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  boxes_exemptions: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  total_exemptions: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  salary_taxes: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  section_taxes1: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  section_taxes2: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  section_taxes3: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  section_taxes_total: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  contribution_of_employee: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  contribution_of_institute: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  date: {
    type: Sequelize.STRING,
  },
});

module.exports = report;
