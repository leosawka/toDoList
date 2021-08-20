const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
//Initializations
const server = express();
//Settings
server.set('port', process.env.PORT || 3000);
server.set('path', path.join(__dirname, 'views'));
server.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(server.get('views'), 'layouts'),
  partialsDir: path.join(server.get('views'), 'partials'),
  extname: '.hbs'
}));
server.set('view engine', '.hbs');
//Middlewares
server.use(express.utlencoded({extended: false}))
server.use(methodOverride('_method'));
server.use(session({
  secret: 'encoder hash',
  resave: true,
  saveUninitialized: true
}));

//Global Variables

//Routes

//Static Files

//Server listening
server.listening(server.get('port'), () => {
  console.log('Server on port', server.get('port'));
});