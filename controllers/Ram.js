const Ram = require("../models/RAM");
//GUARDAR INFORMACIÓN
module.exports.guardar = async(req, res) => {
    const { codigo, marca, fabricante, tecnologia, cap_vel, precio } = req.body;
    if (!codigo || !marca || !fabricante || !tecnologia || !cap_vel || !precio) {

        return res.send("Ingrese la información correctamente.");

    }

    if (typeof codigo === "string" || typeof precio === "string") {
        return res.send("Has ingresado un dato erroneo. Volverlo a intentar");
    }

    const codigon = await Ram.findOne({ codigo });
    if (codigon) {
        return res.send("Ya existe ese código");
    }

    const ram = new Ram({
        codigo: req.body.codigo,
        marca: req.body.marca,
        fabricante: req.body.fabricante,
        tecnologia: req.body.tecnologia,
        cap_vel: req.body.cap_vel,
        precio: req.body.precio,
    });
    await ram.save();

    return res.send("Guardado con exito");
};

// MOSTRAR
module.exports.mostrar = async(req, res) => {
    if (req.params.codigo) {
        const codigon = req.params.codigo;
        const mostrar = await Ram.findOne({ codigo: codigon });
        if (mostrar == null) {
            res.send("No existe ese código");
            res.end();
        } else {
            return res.send(mostrar);
        }
    } else {
        const mostrar = await Ram.find();
        return res.send(mostrar);
    }
};
//EDITAR
module.exports.editar = async(req, res) => {
    const valor = req.params.codigo;
    if (valor) {
        const editar = await Ram.updateOne({ codigo: valor }, {
            marca: req.body.marca,
            fabricante: req.body.fabricante,
            tecnologia: req.body.tecnologia,
            cap_vel: req.body.cap_vel,
            precio: req.body.precio,
        });
        const mostrar = await Ram.findOne({ codigo: valor });
        if (mostrar == null) {
            res.send("No existe ese código");
            res.end();
        } else {
            return res.send(mostrar);
        }
    } else {
        res.send("Debe ingresar el código de la memoria RAM que desea editar");
    }
};
//borrar
module.exports.borrar = async(req, res) => {
    if (req.params.case && req.params.valor) {
        const valor = req.params.valor;
        switch (req.params.case) {
            case "marca":
                await Ram.deleteMany({ marca: valor });
                const mostrar = await Ram.find();
                res.send(mostrar);
                break;
            case "fabricante":
                await Ram.deleteMany({ fabricante: valor });
                const fmostrar = await Ram.find();
                res.send(fmostrar);
                break;
            case "tecnologia":
                await Ram.deleteMany({ tecnologia: valor });
                const nmostrar = await Ram.find();
                res.send(nmostrar);
                break;
            case "cap_vel":
                await Ram.deleteMany({ cap_vel: valor });
                const vmostrar = await Ram.find();
                res.send(vmostrar);
                break;
            case "precio":
                await Ram.deleteMany({ precio: valor });
                const pmostrar = await Ram.find();
                res.send(pmostrar);
                break;

            default:
                res.send("La propiedad que ha ingresado no existe");
                break;
        }
    } else {
        const codigon = req.params.case;
        await Ram.deleteOne({ codigo: codigon });
        const mostrar = await Ram.find();
        return res.send(mostrar);
    }
};