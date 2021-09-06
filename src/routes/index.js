const express = require('express'); //Lo guardo en una cosntante router porque necesito administrar rutas, no servidores
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/about', (req, res) => {
  res.render("about")
});

module.exports = router;