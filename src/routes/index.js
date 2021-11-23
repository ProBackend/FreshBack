const express = require("express");
const router = express.Router();

require('../connection');

/* Controladores Orientados a objetos */
let informacion = new require("../controllers/informacion");
let cliente = new require("../controllers/clientes");
let gerente = new require("../controllers/gerente");
let producto = new require("../controllers/Producto");
let pr_dia = new require("../controllers/Pr_dia");
let menu_dia = new require("../controllers/menu_dia");

/* GET home */
router.get('/', async(req, res) => {
  res.render('main')
});

router.get('/Clientes', async(req, res) => {
  res.json(await cliente.consultar(req.body));
});

router.get('/nosotros/consulta', async function(req, res) {
  res.json(await informacion.consultar())
});

router.get('/ProductoRegu/consulta', async function(req, res) {
  res.json(await producto.consultar())
});
router.get('/ProductoDia/consulta', async function(req, res) {
  res.json(await pr_dia.consultar())
});
router.get('/MenuDia/consulta', async function(req, res) {
  res.json(await menu_dia.consultar())
});

/* POST  rutas*/
router.post('/Login/Registrarse', async (req, res) => {
  await cliente.guardar(req.body)
    .then(registro => {
      if(registro.tokencont) {
        res.json({ status: 'Te has registrado correctamente', tokencont: true, token: registro.token, clientela: registro.clientela, tipo: "Cliente"})
        res.redirect('/Clientes')
      } else {
        res.json({ status: 'Su usuario y/o correo ya está en uso', tokencont: false})
        res.redirect('/Login')
      }
    });
});
router.post('/gerente/registrar', async (req, res) => {
  await gerente.guardar(req.body)
  .then(registro => {
    if(registro) {
      res.json({ status: 'Se ha registrado correctamente'})
    } else {
      res.json({ status: 'El usuario ya está en uso'})
    }
  });
});
router.post('/Login/Iniciar_sesion', Passport.authenticate('local', {
  successRedirect: '/AcercadeNosotros',
  failureRedirect: '/Login',
  failureFlash: true
}));

router.post('/nosotros/guardar', async function(req, res) {
  res.json(await informacion.guardar(req.body))
});
router.post('/ProductosRegu/guardar', async function(req, res) {
  res.json(await producto.guardar(req.body))
});
router.post('/ProductosDia/guardar', async function(req, res) {
  res.json(await pr_dia.guardar(req.body))
});
router.post('/MenuDia/guardar', async function(req, res) {
  res.json(await menu_dia.guardar(req.body))
});

/*Put rutas */
router.put('/ProductosRegu/editar', async function(req, res) {
  res.json(await producto.editar(req.body))
});
router.put('/ProductosDia/editar', async function(req, res) {
res.json(await pr_dia.editar(req.body))
});
router.put('/MenuDia/editar', async function(req, res) {
  res.json(await menu_dia.editar(req.body))
});
/*Delete rutas */
router.delete('/nosotros/eliminar', async function(req, res) {
  res.json(await informacion.eliminar(req.body))
});
router.delete('/ProductosRegu/eliminar', async function(req, res) {
    res.json(await producto.eliminar(req.body))
});
router.delete('/ProductosDia/eliminar', async function(req, res) {
    res.json(await pr_dia.eliminar(req.body))
});
router.delete('/MenuDia/eliminar', async function(req, res) {
    res.json(await menu_dia.eliminar(req.body))
});

module.exports = router;
