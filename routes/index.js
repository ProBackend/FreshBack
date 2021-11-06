const express = require("express");
const router = express.Router();
const process = require("../controllers/procesador");
const registr = require("../controllers/registro");
const disco = require("../controllers/discod");
const tarjeta = require("../controllers/Tarjetav");
const cas = require("../controllers/Case");
const ram = require("../controllers/Ram");
const pmadre = require("../controllers/Placa_madre");

//RUTAS
// User and password
router.post("/registro", registr.rgt);

//Procesador
router.post(
    "/procesador/:user?/:password?",
    registr.check,
    process.guardar
);
router.get(
    "/procesador/:user?/:password?/:codigo?",
    registr.check,
    process.mostrar
);
router.put(
    "/procesador/:user?/:password?/:codigo?",
    registr.check,
    process.editar
);
router.delete(
    "/procesador/:user?/:password?/:case?/:valor?",
    registr.check,
    process.borrar
);

//Disco duro
router.post(
    "/discoduro/:user?/:password?",
    registr.check,
    disco.guardar
);
router.get(
    "/discoduro/:user?/:password?/:codigo?",
    registr.check,
    disco.mostrar
);
router.put(
    "/discoduro/:user?/:password?/:codigo?",
    registr.check,
    disco.editar
);
router.delete(
    "/discoduro/:user?/:password?/:case?/:valor?",
    registr.check,
    disco.borrar
);

//Tarjeta de vídeo
router.post(
    "/tarjetav/:user?/:password?",
    registr.check,
    tarjeta.guardar
);
router.get(
    "/tarjetav/:user?/:password?/:codigo?",
    registr.check,
    tarjeta.mostrar
);
router.put(
    "/tarjetav/:user?/:password?/:codigo?",
    registr.check,
    tarjeta.editar
);
router.delete(
    "/tarjetav/:user?/:password?/:case?/:valor?",
    registr.check,
    tarjeta.borrar
);

//Ram
router.post(
    "/ram/:user?/:password?",
    registr.check,
    ram.guardar
);
router.get(
    "/ram/:user?/:password?/:codigo?",
    registr.check,
    ram.mostrar
);
router.put(
    "/ram/:user?/:password?/:codigo?",
    registr.check,
    ram.editar
);
router.delete(
    "/ram/:user?/:password?/:case?/:valor?",
    registr.check,
    ram.borrar
);
//Case
router.post(
    "/case/:user?/:password?",
    registr.check,
    cas.guardar
);

router.get(
    "/case/:user?/:password?/:codigo?",
    registr.check,
    cas.mostrar
);
router.put(
    "/case/:user?/:password?/:codigo?",
    registr.check,
    cas.editar
);

router.delete(
    "/case/:user?/:password?/:case?/:valor?",
    registr.check,
    cas.borrar
);
//Placa madre

router.post(
    "/pmadre/:user?/:password?",
    registr.check,
    pmadre.guardar
);
router.get(
    "/pmadre/:user?/:password?/:codigo?",
    registr.check,
    pmadre.mostrar
);
router.put(
    "/pmadre/:user?/:password?/:codigo?",
    registr.check,
    pmadre.editar
);
router.delete(
    "/pmadre/:user?/:password?/:case?/:valor?",
    registr.check,
    pmadre.borrar
);
module.exports = router;