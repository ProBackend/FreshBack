const express = require("express");
const router = express.Router();

require('../connection');
const info = require("../controllers/informacion");
const admin = require('../controllers/administradores');

let informacion = new info;
let administradores = new admin;


const Prdt = require("../controllers/Producto");
const Menu = require("../controllers/menu_dia");


// GET home page. 
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

// GET home page.
router.get('/registro', function(req, res) {
    res.render("login")
});

router.get('/AcercadeNosotros', function(req, res) {
    res.render('AcercadeNosotros')
})



router.get('/empleados', async (req, res) => {
  try {
    const r = await informacion.buscar();
    res.send(r);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  };
});

router.get("/prueba", async (req, res) => {
  try {
    const r = await informacion.guardar(req);
    res.send(r);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  };
});

router.get('/gerente/me', async (req, res) => {
  try {
    const r = await administradores.accesa(req.header('x-access-token'));
    res.json(r);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  };
});

router.post('/gerente/register', async (req, res) => {
  try {
    const { nombre, apellido, usuario, clave, contacto } = req.body
    const r = await administradores.guardar(nombre, apellido, usuario, clave, contacto);
    res.json(r);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  };
});

router.post('/gerente/login', async (req, res) => {
  try {
    const { usuario, clave } = req.body
    const r = await administradores.entrar(usuario, clave);
    res.json(r);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  };
});


module.exports = router;