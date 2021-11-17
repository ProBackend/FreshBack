const express = require("express");
const router = express.Router();
const Prdt = require("../controllers/Producto")
const Menu = require("../controllers/menu_dia")

/* GET home page. */
router.get("/:productos", Prdt.save);

router.post("/productos", Prdt.guardar);
router.post("/menu", Menu.guardar);

router.get("/productos/mostrar", Prdt.mostrar);

router.get("/productos/editar/:id", Prdt.edit);

router.post("/productos/editar/:id", Prdt.editar);

router.get("/productos/delete/:id", Prdt.delete);

module.exports = router;