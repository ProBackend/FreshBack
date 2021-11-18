const express = require("express");
const router = express.Router();
const Prdt = require("../controllers/Producto")
const Menu = require("../controllers/menu_dia")
const Login = require("../controllers/Login")

/* GET home page. */
router.get('/Login', function(req, res) {
    res.render("login")
});
router.post('/Login', function(req, res) {
    console.log('aaa')
    console.log(req.body)
    res.send('co;oooo')
});

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

module.exports = router;