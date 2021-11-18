const express = require("express");
const router = express.Router();
const Prdt = require("../controllers/Producto")
const Menu = require("../controllers/menu_dia")

/* GET home page. */
router.get("/:productos", Prdt.save);
//Poductos
router.post("/productos", Prdt.guardar);

router.get("/productos/mostrar", Prdt.mostrar);

router.get("/productos/editar/:id", Prdt.edit);

router.post("/productos/editar/:id", Prdt.editar);

router.get("/productos/delete/:id", Prdt.delete);

//Menu del día
router.post("/menu", Menu.guardar);
//router.get("/menu/mostrar", Menu.mostrar);
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