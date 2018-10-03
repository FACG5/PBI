const Sequelize = require('sequelize');
require('env2')('./config.env');

const host = process.env.HOST || 'localhost';
const username = process.env.db_username;
const password = process.env.db_password;
const dbname = process.env.db_name;

module.exports = new Sequelize(dbname, username, password, {
  host,
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    underscored: true,
    timestamps: false,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
