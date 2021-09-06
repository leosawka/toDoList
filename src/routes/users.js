const express = require('express'); //Lo guardo en una cosntante router porque necesito administrar rutas, no servidores
const router = express.Router();

router.get('/users/signin', (req, res) => {
  res.send("Sign In")
})

router.get('/users/signup', (req, res) => {
  res.send("Signup")
})

module.exports = router;