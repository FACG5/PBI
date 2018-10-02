const Sequelize = require('sequelize');
require('env2')('./config.env');

const host = process.env.HOST || 'localhost'
const username = process.env.db_username;
const password = process.env.db_password;
const dbname = process.env.db_name;

const connection = new Sequelize(dbname, username, password, {
  host,
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
    timestamps: false,
  },
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const models = {
  admin: connection.import('./models/admin'),
  certificate: connection.import('./models/certificate'),
  employee: connection.import('./models/employee'),
  fixedVarible: connection.import('./models/fixedVarible'),
  purchaseBox: connection.import('./models/purchaseBox'),
  purchasesEmployee: connection.import('./models/purchasesEmployee'),
  report: connection.import('./models/report'),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

models.sequelize = Sequelize;
models.connection = connection;

module.exports = models;


