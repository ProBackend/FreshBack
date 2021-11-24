const express = require("express");
const router = express.Router();
let verify = require('../controllers/verify')

/* Controladores Orientados a objetos */
const info = require("../controllers/informacion")
let informacion = new info

const User = require('../models/usuario')
const user = require("../controllers/usuario")
let usuario = new user

const pro = require("../controllers/Producto");
let producto = new pro

const proDia = require("../controllers/Pr_dia");
let Pr_dia = new proDia

const menu = require("../controllers/menu_dia");
let menu_dia = new menu

/* GET home */
router.get('/', (req, res) => {
  res.render('main')
});
router.get('/verificar', verify, async function(req, res, next) {
  const user = await User.findById(req.userid, { clave: 0 })
  if (!user) {
    return res.status(404).json({auth: false});
  }else {
    res.json({auth: true, rol: user.rol, nombre: user.nombre});
  }
});
router.get('/nosotros/consulta', async function(req, res) {
  res.json(await informacion.consultar())
});
router.get('/ProductoRegu/consulta', async function(req, res) {
  res.json(await producto.consultar())
});
router.get('/ProductoDia/consulta', async function(req, res) {
  res.json(await Pr_dia.consultar())
});
router.get('/MenuDia/consulta', async function(req, res) {
  res.json(await menu_dia.consultar())
});

/* POST  rutas*/
router.post('/Login/Iniciar_sesion', async (req, res) => {
  const log = await usuario.login(req.body);
  if(log) {
    res.json({ status: 'Has iniciado sesión', token: log})
  } else {
    res.json({ status: 'Su usuario y/o contraseña estan incorrectos'})
  }
});
router.post('/gerente/registrar', verify, async (req, res) => {
  try {
    const token = await usuario.guardargere(req.body);
    if(token) {
      res.json({ status: 'Se ha guardado el gerente, ahora podras iniciar sesion con el', token: token, tipo: "Gerente"})
    } else {
      res.json({ status: 'Su usuario y/o correo ya está en uso', tokencont: false})
    }
  }
  catch(err) {
    res.status(500).json({ status: 'Error al registrar', tokencont: false})
  }
})

router.post('/Login/Registrarse', async function(req, res) {
  const token = await usuario.guardar(req.body);
  if(token) {
    res.json({ status: 'Te has registrado correctamente', token: token})
  } else {
    res.json({ status: 'Su usuario y/o correo ya está en uso'})
  }
});

router.post('/ProductosRegu/guardar', async function(req, res) {
  res.json(await producto.guardar(req.body))
});
router.post('/ProductosDia/guardar', async function(req, res) {
  res.json(await Pr_dia.guardar(req.body))
});
router.post('/MenuDia/guardar', async function(req, res) {
  res.json(await menu_dia.guardar(req.body))
});
router.post('/nosotros/guardar', async function(req, res) {
  res.json(await informacion.guardar(req.body))
});

/*Put rutas */
router.put('/ProductosRegu/editar', async function(req, res) {
  res.json(await producto.editar(req.body))
});
router.put('/ProductosDia/editar', async function(req, res) {
  res.json(await Pr_dia.editar(req.body))
});
router.put('/MenuDia/editar', async function(req, res) {
  res.json(await menu_dia.editar(req.body))
});
/*Delete rutas */
router.delete('/ProductosRegu/eliminar', async function(req, res) {
  res.json(await producto.eliminar(req.body))
});
router.delete('/ProductosDia/eliminar', async function(req, res) {
  res.json(await Pr_dia.eliminar(req.body))
});
router.delete('/MenuDia/eliminar', async function(req, res) {
  res.json(await menu_dia.eliminar(req.body))
});
router.delete('/nosotros/eliminar', async function(req, res) {
  res.json(await informacion.eliminar(req.body))
});

module.exports = router;