const express = require("express");
const router = express.Router();
const Producto = require("../controllers/Producto");
const Menu = require("../controllers/menu_dia");
const Pr_dia = require("../controllers/Pr_dia");
const Clientes = require('../models/cliente.js');
const Passport = require("passport");

/* GET home page. */
router.get('/Login', async (req, res) => {
  res.render('Login')
});
router.get('/Clientes', async (req, res) => {
    const cliente = await Clientes.find();
    res.json(cliente);
});
router.post('/Login/Registrarse', async (req, res) => {
  const Email = await Clientes.findOne({correo: req.body.correo})
  const User = await Clientes.findOne({user: req.body.user})

  if (Email) {
    res.json({
      status: 'El correo ya está en uso'
    })
    res.redirect('/Login')
  }
  if (User) {
    res.json({
      status: 'El user ya está en uso'
    })
    res.redirect('/Login')
  }
  const cliente = new Clientes(req.body);
  await cliente.save();
  res.json({
    status: 'Te has registrado correctamente'
  })
  res.redirect('/Clientes')
});
router.post('/Login/Iniciar_sesion', Passport.authenticate('local', {
  successRedirect: '/AcercadeNosotros',
  failureRedirect: '/Login',
  failureFlash: true
}));

router.get('/Productos', function(req, res) {
  res.render('Inventario')
})
router.get('/Productos/consulta', async function(req, res) {
  res.json(await Producto.consultar())
})

//Poductos
// router.get("/:productos", Producto.save);
// router.post("/productos", Prdt.guardar);
// router.get("/productos/mostrar", Prdt.mostrar);
// router.get("/productos/editar/:id", Prdt.edit);
// router.post("/productos/editar/:id", Prdt.editar);
// router.get("/productos/delete/:id", Prdt.delete);

//Menu del día
// router.post("/menu", Menu.guardar);
// router.get("/menu/mostrar", Menu.mostrar);
// router.get("/menu/editar/:id", Menu.edit);
// router.post("/menu/editarm/:id", Menu.editar);
// router.get("/menu/delete/:id", Menu.delete);

//Producto del día
// router.post("/productodia", Pr_dia.guardar);
// router.get("/productodia/mostrar", Pr_dia.mostrar);
// router.get("/productodia/editar/:id", Pr_dia.edit);
// router.post("/productodia/editar/:id", Pr_dia.editar);
// router.get("/productodia/delete/:id", Pr_dia.delete);

// router.get('/AcercadeNosotros', function(req, res) {
//   res.render('AcercadeNosotros')
// })

module.exports = router;