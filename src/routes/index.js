const express = require("express");
const router = express.Router();

const info = require("../controllers/informacion")
let informacion = new info

/* GET home page. */
router.get('/registro', function(req, res) {
  res.render("login")
});

router.get('/AcercadeNosotros', function(req, res) {
  //informacion.guardad(req, res)
  res.render('AcercadeNosotros')
})

module.exports = router;