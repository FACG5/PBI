const Sequelize = require('sequelize');

const connection = new Sequelize('pbi', 'othman50', '123', {
  host: 'localhost',
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


