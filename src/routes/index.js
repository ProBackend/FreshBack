const express = require("express");
const router = express.Router();
require('../connection')

const inf = require("../controllers/informacion")

/* GET home page. */
router.get('/registro', function(req, res) {
    res.render("login")
});

router.get('/AcercadeNosotros', function(req, res) {
    res.render('AcercadeNosotros')
})

router.get('/empleados', (req, res) => {
    res.json(Informacion.find())
});

router.get("/prueba", inf.guardar)


module.exports = router;