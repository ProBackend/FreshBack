const express = require("express");
const router = express.Router();
const Passport = require("passport");

/* Controladores Orientados a objetos */
const info = require("../controllers/informacion")
const clien = require("../controllers/clientes")
const pro = require("../controllers/Producto");
let informacion = new info
let cliente = new clien
let Producto = new pro

/* Controladores */
const Prdt = require("../controllers/Producto");
const Menu = require("../controllers/menu_dia");
const Pr_dia = require("../controllers/Pr_dia");

/* GET vistas */
router.get('/Login', async(req, res) => {
    res.render('Login')
});

router.get('/AcercadeNosotros', function(req, res) {
    res.render('AcercadeNosotros')
})

router.get('/Productos', function(req, res) {
    res.render('productos')
});

router.get('/MenudelDia', function(req, res) {
    res.render('MenudelDia')
})

/* GET API*/
router.get('/Clientes', async(req, res) => {
    res.json(await cliente.consultar(req.body));
});

router.get('/AcercadeNosotros/consulta', async function(req, res) {
    res.json(await informacion.consultar())
})

router.get('/Productos/consulta', async function(req, res) {
    res.json(await Producto.consultar())
})

/* POST  rutas*/
router.post('/Login/Registrarse', async(req, res) => {
    await cliente.guardar(req.body)
        .then(registro => {
            if (registro) {
                res.json({ status: 'Te has registrado correctamente' })
                res.redirect('/Clientes')
            } else {
                res.json({ status: 'Su usuario y/o correo ya está en uso' })
                res.redirect('/Login')
            }
        })
});

router.post('/Login/Iniciar_sesion', Passport.authenticate('local', {
    successRedirect: '/AcercadeNosotros',
    failureRedirect: '/Login',
    failureFlash: true
}));

router.post('/Productos/guardar', async function(req, res) {
    res.json(await Producto.guardar())
})

module.exports = router;