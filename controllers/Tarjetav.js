const Tarjetav = require("../models/Tarjetav");
//GUARDAR INFORMACIÓN
module.exports.guardar = async(req, res) => {

    const { codigo, marca, fabricante, tipo, ano, resolucion, precio } = req.body;
    if (!codigo || !marca || !fabricante || !tipo || !ano || !precio || !resolucion) {
        return res.send("Ingrese la información correctamente.");
    }

    if (typeof codigo === "string" || typeof precio === "string" || typeof ano === "string") {
        return res.send("Has ingresado un dato erroneo. Volverlo a intentar");
    }

    const codigon = await Tarjetav.findOne({ codigo });
    if (codigon) {
        return res.send("Ya existe ese código");
    }

    const tarjeta = new Tarjetav({
        codigo: req.body.codigo,
        marca: req.body.marca,
        fabricante: req.body.fabricante,
        tipo: req.body.tipo,
        ano: req.body.ano,
        resolucion: req.body.resolucion,
        precio: req.body.precio,
    });
    await tarjeta.save();

    return res.send("Guardado con exito");
};

// MOSTRAR
module.exports.mostrar = async(req, res) => {
    const codigon = req.params.codigo;
    if (codigon) {
        const mostrar = await Tarjetav.findOne({ codigo: codigon });
        if (mostrar == null) {
            res.send("No existe ese código");
            res.end();
        } else {
            return res.send(mostrar);
        }
    } else {
        const mostrar = await Tarjetav.find();
        return res.send(mostrar);
    }
};
//EDITAR
module.exports.editar = async(req, res) => {
    const valor = req.params.codigo;
    if (valor) {
        await Tarjetav.updateOne({ codigo: valor }, {

            marca: req.body.marca,
            fabricante: req.body.fabricante,
            tipo: req.body.tipo,
            ano: req.body.ano,
            resolucion: req.body.resolucion,
            precio: req.body.precio,
        });
        const mostrar = await Tarjetav.findOne({ codigo: valor });
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
                await Tarjetav.deleteMany({ marca: valor });
                const mostrar = await Tarjetav.find();
                res.send(mostrar);
                break;
            case "fabricante":
                await Tarjetav.deleteMany({ fabricante: valor });
                const fmostrar = await Tarjetav.find();
                res.send(fmostrar);
                break;
            case "tipo":
                await Tarjetav.deleteMany({ tipo: valor });
                const nmostrar = await Tarjetav.find();
                res.send(nmostrar);
                break;
            case "ano":
                await Tarjetav.deleteMany({ ano: valor });
                const vmostrar = await Tarjetav.find();
                res.send(vmostrar);
                break;
            case "resolucion":
                await Tarjetav.deleteMany({ resolucion: valor });
                const cmostrar = await Tarjetav.find();
                res.send(cmostrar);
                break;
            case "precio":
                await Tarjetav.deleteMany({ precio: valor });
                const pmostrar = await Tarjetav.find();
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