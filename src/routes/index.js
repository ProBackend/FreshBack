const express = require("express");
const router = express.Router();

/* GET home page. */
router.get('/registro', function(req, res) {
    res.render("login")
});

router.get('/AcercadeNosotros', function(req, res) {
  res.render('informacion')
})

module.exports = router;