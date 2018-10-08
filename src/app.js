const fileUpload = require('express-fileupload');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const handlebars = require('express-handlebars');
const controller = require('./controllers');


const app = express();
app.use(fileUpload());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }),
);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controller);

module.exports = app;
