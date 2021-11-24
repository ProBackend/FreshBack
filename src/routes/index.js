const express = require("express");
const router = express.Router();

require('../connection');
verify = require('../controllers/verify')

/* Controladores Orientados a objetos */
const info = require("../controllers/informacion")
let informacion = new info

const user = require("../controllers/usuario")
let users = new user

const pro = require("../controllers/Producto");
let producto = new pro
const ge = require("../controllers/gerente")
let gerente = new ge
const proDia = require("../controllers/Pr_dia");
let Pr_dia = new proDia
const menu = require("../controllers/menu_dia");
const menu_dia = new menu

/* GET home */
router.get('/', (req, res) => {
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
    res.json(await Pr_dia.consultar())
})
router.get('/MenuDia/consulta', async function(req, res) {
    res.json(await menu_dia.consultar())
})

router.get('/verificar', verify, async function(req, res, next) {
    const userb = await user.findOne(req.userid, { clave: 0 })
    if (!userb) {
        return res.status(404).json({ auth: false, message: 'Usuario inválido' });
    }
    res.json({ auth: true, tipo: req.tipo });
})

/* POST  rutas*/
router.post('/ProductosRegu/guardar', async function(req, res) {
    res.json(await producto.guardar(req.body))
})

router.post('/ProductosDia/guardar', async function(req, res) {
    res.json(await Pr_dia.guardar(req.body))
})

router.post('/MenuDia/guardar', async function(req, res) {
    res.json(await menu_dia.guardar(req.body))
})
router.post('/nosotros/guardar', async function(req, res) {
    res.json(await informacion.guardar(req.body))
})

router.post('/Contacto/Registrarse', verify, async(req, res, next) => {
    try {
        const { nombre, apellido, usuario, clave, correo } = req.body;
        console.log(nombre, apellido, usuario, clave, correo)
        const registro = await users.guardargere(nombre, apellido, usuario, clave, correo);
        if (registro.token) {
            res.json({ status: 'Te has registrado correctamente', token: registro.token, tipo: "Cliente" })
                // res.redirect('/Clientes')
        } else {
            res.json({ status: 'Su usuario y/o correo ya está en uso', tokencont: false })
                // res.redirect('/Login')
        }
    } catch (err) {
        res.status(500).json({ status: 'Error al registrar', tokencont: false })
    }
})

router.post('/Login/Registrarse', async(req, res) => {
    try {
        const { nombre, apellido, usuario, clave, correo } = req.body;
        console.log(nombre, apellido, usuario, clave, correo)
        const registro = await users.guardar(nombre, apellido, usuario, clave, correo);
        if (registro.token) {
            res.json({ status: 'Te has registrado correctamente', token: registro.token, tipo: "Cliente" })
            res.redirect('/Clientes')
        } else {
            res.json({ status: 'Su usuario y/o correo ya está en uso', tokencont: false })
            res.redirect('/Login')
        }
    } catch (err) {
        res.status(500).json({ status: 'Error al registrar', tokencont: false })
    }
});

/*Put rutas */
router.put('/ProductosRegu/editar', async function(req, res) {
    res.json(await producto.editar(req.body))
})

router.put('/ProductosDia/editar', async function(req, res) {
    res.json(await Pr_dia.editar(req.body))
})

router.put('/MenuDia/editar', async function(req, res) {
    res.json(await menu_dia.editar(req.body))
})

/*Delete rutas */
router.delete('/ProductosRegu/eliminar', async function(req, res) {
    res.json(await producto.eliminar(req.body))
})

router.delete('/ProductosDia/eliminar', async function(req, res) {
    res.json(await Pr_dia.eliminar(req.body))
})

router.delete('/MenuDia/eliminar', async function(req, res) {
    res.json(await menu_dia.eliminar(req.body))
})
router.delete('/nosotros/eliminar', async function(req, res) {
    res.json(await informacion.eliminar(req.body))
})


module.exports = router;