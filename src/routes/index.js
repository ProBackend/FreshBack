const express = require("express");
const router = express.Router();
const Passport = require("passport");

/* Controladores Orientados a objetos */
const info = require("../controllers/informacion")
const clien = require("../controllers/clientes")
const pro = require("../controllers/Producto");
const proDia = require("../controllers/Pr_dia");
const menu = require("../controllers/menu_dia");
const ped = require("../controllers/Pedido")
let pedido = new ped
let informacion = new info
let cliente = new clien
let producto = new pro
let productoDia = new proDia
let menuDia = new menu


/* GET home */
router.get('/', async(req, res) => {
    res.render('main')
});

router.get('/Clientes', async(req, res) => {
    res.json(await cliente.consultar(req.body));
});

router.get('/nosotros/consulta', async function(req, res) {
    res.json(await informacion.consultar())
})

router.get('/ProductoRegu/consulta', async function(req, res) {
    res.json(await producto.consultar())
})
router.get('/ProductoDia/consulta', async function(req, res) {
    res.json(await productoDia.consultar())
})
router.get('/MenuDia/consulta', async function(req, res) {
        res.json(await menuDia.consultar())
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
router.post('/ProductosRegu/guardar', async function(req, res) {
    res.json(await producto.guardar(req.body))
})
router.post('/ProductosDia/guardar', async function(req, res) {
    res.json(await productoDia.guardar(req.body))
})
router.post('/MenuDia/guardar', async function(req, res) {
    res.json(await menuDia.guardar(req.body))
})
router.post('/Pedido/ProductosRegu', async function(req, res) {
    res.json(await pedido.agregarp(req.body))
})
router.post('/Pedido/ProductosDia', async function(req, res) {
    console.log("hola")
    res.json(await pedido.agregarpd(req.body))
})
router.post('/Pedido/MenuDia', async function(req, res) {
    console.log("holaaa")
    res.json(await pedido.agregarm(req.body))
})

/*Delete rutas */
router.delete('/ProductosRegu/eliminar', async function(req, res) {
    res.json(await producto.eliminar(req.body))
})
router.delete('/ProductosDia/eliminar', async function(req, res) {
    res.json(await productoDia.eliminar(req.body))
})
router.delete('/MenuDia/eliminar', async function(req, res) {
    res.json(await menuDia.eliminar(req.body))
})
module.exports = router;