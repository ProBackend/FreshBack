const Case = require("../models/case");
//GUARDAR INFORMACIÓN
module.exports.guardar = async(req, res) => {
    //verificar que se ingrese todos los datos
    const { codigo, marca, fabricante, dimension, peso, precio } = req.body;
    if (!codigo || !marca || !fabricante || !dimension || !peso || !precio) {
        return res.send("Ingrese la información correctamente.");
    }
    //verificación
    if (typeof codigo == "string" || typeof precio == "string" || typeof peso == "string") {
        return res.send("Has ingresado un dato erroneo. Volverlo a intentar");
    }
    //verificar si no existe ese código
    const codigon = await Case.findOne({ codigo });
    if (codigon) {
        return res.send("Ya existe ese código");
    }
    //Se procede a guardar
    const cas = new Case({
        codigo: req.body.codigo,
        marca: req.body.marca,
        fabricante: req.body.fabricante,
        dimension: req.body.dimension,
        peso: req.body.peso,
        precio: req.body.precio,
    });

    await cas.save();

    return res.send("Guardado con exito");
};

// MOSTRAR
module.exports.mostrar = async(req, res) => {
    if (req.params.codigo) {
        const codigon = req.params.codigo;
        const mostrar = await Case.findOne({ codigo: codigon });
        if (mostrar == null) {
            res.send("No existe ese código");
            res.end();
        } else {
            return res.send(mostrar);
        }
    } else {
        const mostrar = await Case.find();
        return res.send(mostrar);
    }
};
//EDITAR
module.exports.editar = async(req, res) => {
    const valor = req.params.codigo;
    if (valor) {
        await Case.updateOne({ codigo: valor }, {

            marca: req.body.marca,
            fabricante: req.body.fabricante,
            tecnologia: req.body.tecnologia,
            cap_vel: req.body.cap_vel,
            precio: req.body.precio,
        });
        const mostrar = await Case.findOne({ codigo: valor });
        if (mostrar == null) {
            res.send("No existe ese código");
            res.end();
        } else {
            return res.send(mostrar);
        }
    } else {
        res.send("Debe ingresar el código del case que desea editar");
    }
};
//borrar
module.exports.borrar = async(req, res) => {
    if (req.params.case && req.params.valor) {
        const valor = req.params.valor;
        switch (req.params.case) {
            case "marca":
                await Case.deleteMany({ marca: valor });
                const mostrar = await Case.find();
                res.send(mostrar);
                break;
            case "fabricante":
                await Case.deleteMany({ fabricante: valor });
                const fmostrar = await Case.find();
                res.send(fmostrar);
                break;
            case "dimension":
                await Case.deleteMany({ dimension: valor });
                const nmostrar = await Case.find();
                res.send(nmostrar);
                break;
            case "peso":
                await Case.deleteMany({ peso: valor });
                const vmostrar = await Case.find();
                res.send(vmostrar);
                break;
            case "precio":
                await Case.deleteMany({ precio: valor });
                const pmostrar = await Case.find();
                res.send(pmostrar);
                break;

            default:
                res.send("La propiedad que ha ingresado no existe");
                break;
        }
    } else {
        const codigon = req.params.case;
        await Case.deleteOne({ codigo: codigon });
        const mostrar = await Case.find();
        return res.send(mostrar);
    }
};