const express = require('express'); //Lo guardo en una cosntante router porque necesito administrar rutas, no servidores
const router = express.Router();

router.get('/notes', (req, res) => {
  res.send("User Notes from database")
})

module.exports = router;