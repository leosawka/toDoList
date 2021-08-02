const express = require('express');
const server = express();
//Settings
server.set('port', process.env.PORT || 3000);
//Middlewares

//Global Variables

//Routes

//Static Files

//Server listening
server.listening(server.get('port'), () => {
  console.log('Server on port', server.get('port'));
});