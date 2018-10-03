const app = require('./app');
const { sequelize } = require('./database/models');

sequelize.sync({ force: true }).then(() => {
  app.listen(app.get('port'), () => {
    console.log('App running on port', app.get('port'));
  });
});
