const mongoose = require('mongoose');

// Configuración de la base de datos
mongoose.connect('mongodb://localhost/notes-db-app', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log('ERROR: ', err))