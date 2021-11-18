const express = require("express");
const router = express.Router();
const Prdt = require("../controllers/Producto");
const Menu = require("../controllers/menu_dia");
const Pr_dia = require("../controllers/Pr_dia")

/* GET home page. */
router.get("/:productos", Prdt.save);
router.post("/productos", Prdt.guardar);
router.get("/productos/mostrar", Prdt.mostrar);
router.get("/productos/editar/:id", Prdt.edit);
router.post("/productos/editar/:id", Prdt.editar);
router.get("/productos/delete/:id", Prdt.delete);

//Menu del día
router.post("/menu", Menu.guardar);
router.get("/menu/mostrar", Menu.mostrar);
router.get("/menu/editar/:id", Menu.edit);
router.post("/menu/editarm/:id", Menu.editar);
router.get("/menu/delete/:id", Menu.delete);

//Producto del día
router.post("/productodia", Pr_dia.guardar);
router.get("/productodia/mostrar", Pr_dia.mostrar);
router.get("/productodia/editar/:id", Pr_dia.edit);
router.post("/productodia/editar/:id", Pr_dia.editar);
router.get("/productodia/delete/:id", Pr_dia.delete);

module.exports = router;