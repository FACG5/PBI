const app = require('./app');
const models = require('./database/dbConnect');

models.connection.sync({ force: true }).then(() => {
  app.listen(app.get('port'), () => {
    console.log('App running on port', app.get('port'));
  });
});
