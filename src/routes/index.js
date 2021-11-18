const express = require("express");
const router = express.Router();
const Prdt = require("../controllers/Producto");
const Menu = require("../controllers/menu_dia");
const Clientes = require('../models/cliente.js');

/* GET home page. */
router.get('/Login', async (req, res) => {
  res.render('Login')
});
router.get('/Clientes', async (req, res) => {
    const cliente = await Clientes.find();
    res.json(cliente);
});
router.post('/Login', async (req, res) => {
  const cliente = new Clientes(req.body);
  await cliente.save();
  res.json({
    status: 'Te has registrado correctamente'
  })
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

router.get('/AcercadeNosotros', function(req, res) {
  res.render('AcercadeNosotros')
})

module.exports = router;