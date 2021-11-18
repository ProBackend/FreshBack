const express = require("express");
const router = express.Router();
require('../connection')

const Informacion = require('../models/informacion')

/* GET home page. */
router.get('/registro', function(req, res) {
    res.render("login")
});

router.get('/AcercadeNosotros', function(req, res) {
  res.render('AcercadeNosotros')
})

router.get('/empleados', (req, res) => {
  res.json(Informacion.find())
});

/*
const var1  = {
  nombre: 'pedro',
  apellido: 'salinas',
  direccion: 'av los callaos',
  descripcion: 'Chef',
  telefono: '04123366548'
}
*/

crearinfon();

async function crearinfon() {
  const info = new Informacion ({
    nombre: 'pedro',
    apellido: 'salinas',
    direccion: 'av los callaos',
    descripcion: 'Chef',
    telefono: '04123366548'
  });
  await info.save();
}

module.exports = router;