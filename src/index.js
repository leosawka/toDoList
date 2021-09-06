const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initializations
const server = express();
require('./database')

//Settings
server.set('port', process.env.PORT || 80);// 80 puerto por defecto http://
server.set('views', path.join(__dirname, '/views'));
server.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(server.get('views'), 'layouts'),
  partialsDir: path.join(server.get('views'), 'partials'),
  extname: '.hbs'
}));
server.set('view engine', '.hbs');

//Middlewares
server.use(express.urlencoded({extended: false}))
server.use(methodOverride('_method'));
server.use(session({
  secret: 'encoder hash',
  resave: true,
  saveUninitialized: true
}));

//Global Variables

//Routes
server.use(require('./routes/index'));
server.use(require('./routes/notes'));
server.use(require('./routes/users'));

//Static Files
server.use(express.static(path.join(__dirname, 'public')));

//Server listening
server.listen(server.get('port'), () => {
  console.log('Server on port', server.get('port'));
});