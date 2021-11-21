const express = require("express");
const router = express.Router();

require('../connection');

/* Controladores Orientados a objetos */
const info = require("../controllers/informacion")
const clien = require("../controllers/clientes")
const pro = require("../controllers/Producto");

/* Controladores */
const Prdt = require("../controllers/Producto");
const Menu = require("../controllers/menu_dia");
const Pr_dia = require("../controllers/Pr_dia");
const Clientes = require('../models/cliente.js');
const Passport = require("passport");
const admin = require('../controllers/administradores');

let informacion = new info
let cliente = new clien
let Producto = new pro
let administradores = new admin;

// GET rutas
/* GET home page. */
router.get('/Login', async (req, res) => {
  res.render('Login')
});
router.get('/Clientes', async (req, res) => {
  const cliente = await Clientes.find();
  res.json(cliente);
});
router.get('/Clientes', async (req, res) => {
    const cliente = await Clientes.find();
    res.json(cliente);
});

router.post('/Login/Iniciar_sesion', Passport.authenticate('local', {
  successRedirect: '/AcercadeNosotros',
  failureRedirect: '/Login',
  failureFlash: true
}));
/*
//Poductos
router.post("/productos", Prdt.guardar);
router.get("/productos/mostrar", Prdt.mostrar);
router.get("/productos/editar/:id", Prdt.edit);
router.post("/productos/editar/:id", Prdt.editar);
router.get("/productos/delete/:id", Prdt.delete);
*/
//Menu del día
router.post("/menu", Menu.guardar);
//router.get("/menu/mostrar", Menu.mostrar);

router.get('/AcercadeNosotros', function(req, res) {
  res.render('AcercadeNosotros')
});

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
router.get('/AcercadeNosotros/consulta', async function(req, res) {
  res.json(await informacion.consultar());
});


/* GET home */
router.get('/', async (req, res) => {
  res.render('main')
});

/* GET API */
router.get('/Clientes', async (req, res) => {
  res.json(await cliente.consultar(req.body));
});

router.get('/nosotros/consulta', async function(req, res) {
  res.json(await informacion.consultar())
})

router.get('/Productos/consulta', async function(req, res) {
  res.json(await Producto.consultar())
})

router.get('/Productos/consulta', async function(req, res) {
  res.json(await Producto.consultar())
})

/* POST  rutas*/
router.post('/Login/Registrarse', async (req, res) => {
  await cliente.guardar(req.body)
    .then(registro => {
      if(registro) {
        res.json({ status: 'Te has registrado correctamente'})
        res.redirect('/Clientes')
      } else {
        res.json({ status: 'Su usuario y/o correo ya está en uso'})
        res.redirect('/Login')
      }
    })
});

router.post('/Productos/guardar', async function(req, res) {
  res.json(await Producto.guardar())
});

module.exports = router;