const express = require("express");
const router = express.Router();

/* GET home page. */
router.get('/registro', function(req, res) {
  res.render("productos")
});

router.get('/AcercadeNosotros', function(req, res) {
  res.render('informacion')
})

module.exports = router;