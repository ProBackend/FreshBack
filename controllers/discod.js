const Discod = require("../models/Disco_duro");
//GUARDAR INFORMACIÓN
module.exports.guardar = async(req, res) => {
    const { codigo, marca, fabricante, tecnologia, cap_alm, cache, precio } =
    req.body;
    if (!codigo || !marca || !fabricante || !tecnologia || !cap_alm || !precio || !cache) {
        return res.send("Ingrese la información correctamente.");
    }

    if (typeof codigo === "string" || typeof precio === "string") {
        return res.send("Has ingresado un dato erroneo. Volverlo a intentar");
    }

    const codigon = await Discod.findOne({ codigo });
    if (codigon) {
        return res.send("Ya existe ese código");
    }

    const discoduro = new Discod({
        codigo: req.body.codigo,
        marca: req.body.marca,
        fabricante: req.body.fabricante,
        tecnologia: req.body.tecnologia,
        cap_alm: req.body.cap_alm,
        cache: req.body.cache,
        precio: req.body.precio,
    });
    await discoduro.save();

    return res.send("Guardado con exito");
};

// MOSTRAR
module.exports.mostrar = async(req, res) => {
    const codigon = req.params.codigo;
    if (codigon) {
        const mostrar = await Discod.findOne({ codigo: codigon });
        if (mostrar == null) {
            res.send("No existe ese código");
            res.end();
        } else {
            return res.send(mostrar);
        }
    } else {
        const mostrar = await Discod.find();
        return res.send(mostrar);
    }
};
//EDITAR
module.exports.editar = async(req, res) => {
    const valor = req.params.codigo;
    if (valor) {
        await Discod.updateOne({ codigo: valor }, {

            marca: req.body.marca,
            fabricante: req.body.fabricante,
            tecnologia: req.body.tecnologia,
            cap_alm: req.body.cap_alm,
            cache: req.body.cache,
            precio: req.body.precio,
        });
        const mostrar = await Discod.findOne({ codigo: valor });
        if (mostrar == null) {
            res.send("No existe ese código");
            res.end();
        } else {
            return res.send(mostrar);
        }
    } else {
        res.send("Debe ingresar el código del procesador que desea editar");
    }
};
//borrar
module.exports.borrar = async(req, res) => {
    if (req.params.case && req.params.valor) {
        const valor = req.params.valor;
        //PARA ELIMINAR VARIOS JUNTOS
        switch (req.params.case) {
            case "marca":
                await Discod.deleteMany({ marca: valor });
                const mostrar = await Discod.find();
                res.send(mostrar);
                break;
            case "fabricante":
                await Discod.deleteMany({ fabricante: valor });
                const fmostrar = await Discod.find();
                res.send(fmostrar);
                break;
            case "tecnologia":
                await Discod.deleteMany({ tecnologia: valor });
                const nmostrar = await Discod.find();
                res.send(nmostrar);
                break;
            case "cap_alm":
                await Discod.deleteMany({ cap_alm: valor });
                const vmostrar = await Discod.find();
                res.send(vmostrar);
                break;
            case "cache":
                await Discod.deleteMany({ cache: valor });
                const cmostrar = await Discod.find();
                res.send(cmostrar);
                break;
            case "precio":
                await Discod.deleteMany({ precio: valor });
                const pmostrar = await Discod.find();
                res.send(pmostrar);
                break;
            default:
                res.send("La propiedad que ha ingresado no existe");
                break;
        }
    } else {
        const codigon = req.params.case;

        await Discod.deleteOne({ codigo: codigon });
        const mostrar = await Discod.find();
        return res.send(mostrar);
    }
};