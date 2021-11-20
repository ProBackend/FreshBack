const express = require("express");
const router = express.Router();
const Passport = require("passport");

/* Controladores Orientados a objetos */
const info = require("../controllers/informacion")
const clien = require("../controllers/clientes")
let informacion = new info
let cliente = new clien

/* Controladores */
const Prdt = require("../controllers/Producto");
const Menu = require("../controllers/menu_dia");
const Pr_dia = require("../controllers/Pr_dia");


// GET rutas
/* GET vistas */
router.get('/login', async (req, res) => {
  res.render('Login')
});

router.get('/AcercadeNosotros', function(req, res) {
  res.render('AcercadeNosotros')
})

/* GET API*/
router.get('/Clientes', async (req, res) => {
  res.json(await cliente.consultar(req.body));
});

router.get('/AcercadeNosotros/consulta', async function(req, res) {
  res.json(await informacion.consultar())
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

router.post('/Login/Iniciar_sesion', Passport.authenticate('local', {
  successRedirect: '/AcercadeNosotros',
  failureRedirect: '/Login',
  failureFlash: true
}));

//Poductos
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

router.get('/AcercadeNosotros', function(req, res) {
  res.render('AcercadeNosotros')
})

router.get('/AcercadeNosotros/consulta', async function(req, res) {
  res.json(await informacion.consultar())
})

// router.get("/:productos", Prdt.save);
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