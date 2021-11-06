const Procesador = require("../models/Procesador");
//GUARDAR INFORMACIÓN
module.exports.guardar = async(req, res) => {
    const { codigo, marca, fabricante, nucleo, vel_fun, precio } = req.body;
    if (!codigo || !marca || !fabricante || !nucleo || !vel_fun || !precio) {
        return res.send("Ingrese la información correctamente.");
    }

    if (typeof codigo === "string" || typeof precio === "string") {
        return res.send("Has ingresado un dato erroneo. Volverlo a intentar");
    }

    const codigon = await Procesador.findOne({ codigo });
    if (codigon) {
        return res.send("Ya existe ese código");
    }

    const procesador = new Procesador({
        codigo: req.body.codigo,
        marca: req.body.marca,
        fabricante: req.body.fabricante,
        nucleo: req.body.nucleo,
        vel_fun: req.body.vel_fun,
        precio: req.body.precio,
    });
    await procesador.save();

    return res.send("Guardado con exito");
};

// MOSTRAR
module.exports.mostrar = async(req, res) => {
    if (req.params.codigo) {
        const codigon = req.params.codigo;
        const mostrar = await Procesador.findOne({ codigo: codigon });
        if (mostrar == null) {
            res.send("No existe ese código");
            res.end();
        } else {
            return res.send(mostrar);
        }
    } else {
        const mostrar = await Procesador.find();
        return res.send(mostrar);
    }
};
//EDITAR
module.exports.editar = async(req, res) => {
    const valor = req.params.codigo;
    if (valor) {
        await Procesador.updateOne({ codigo: valor }, {
            marca: req.body.marca,
            fabricante: req.body.fabricante,
            nucleo: req.body.nucleo,
            vel_fun: req.body.vel_fun,
            precio: req.body.precio,
        });
        const mostrar = await Procesador.findOne({ codigo: valor });
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
        switch (req.params.case) {
            case "marca":
                await Procesador.deleteMany({ marca: valor });
                const mostrar = await Procesador.find();
                res.send(mostrar);
                break;
            case "fabricante":
                await Procesador.deleteMany({ fabricante: valor });
                const fmostrar = await Procesador.find();
                res.send(fmostrar);
                break;
            case "nucleo":
                await Procesador.deleteMany({ nucleo: valor });
                const nmostrar = await Procesador.find();
                res.send(nmostrar);
                break;
            case "vel_fun":
                await Procesador.deleteMany({ vel_fun: valor });
                const vmostrar = await Procesador.find();
                res.send(vmostrar);
                break;
            case "precio":
                await Procesador.deleteMany({ precio: valor });
                const pmostrar = await Procesador.find();
                res.send(pmostrar);
                break;

            default:
                res.send("La propiedad que ha ingresado no existe");
                break;
        }
    } else {
        const codigon = req.params.case;
        await Procesador.deleteOne({ codigo: codigon });
        const mostrar = await Procesador.find();
        return res.send(mostrar);
    }
};