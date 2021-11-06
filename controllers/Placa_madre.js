const Placa_madre = require("../models/Placa_madre");
//GUARDAR INFORMACIÓN
module.exports.guardar = async(req, res) => {
    // console.log(req.body)
    const { codigo, marca, fabricante, modelo, precio } = req.body;
    if (!codigo || !marca || !fabricante || !modelo || !precio) {
        return res.send("Ingrese la información correctamente.");

    }

    if (typeof codigo === "string" || typeof precio === "string") {
        return res.send("Has ingresado un dato erroneo. Volverlo a intentar");
    }

    const codigon = await Placa_madre.findOne({ codigo });
    if (codigon) {
        return res.send("Ya existe ese código");
    }

    const placamadre = new Placa_madre({
        codigo: req.body.codigo,
        marca: req.body.marca,
        fabricante: req.body.fabricante,
        modelo: req.body.modelo,
        precio: req.body.precio,
    });
    await placamadre.save();

    return res.send("Guardado con exito");
};

// MOSTRAR
module.exports.mostrar = async(req, res) => {
    if (req.params.codigo) {
        const codigon = req.params.codigo;
        const mostrar = await Placa_madre.findOne({ codigo: codigon });
        if (mostrar == null) {
            res.send("No existe ese código");
            res.end();
        } else {
            return res.send(mostrar);
        }
    } else {
        const mostrar = await Placa_madre.find();
        return res.send(mostrar);
    }
};
//EDITAR
module.exports.editar = async(req, res) => {
    const valor = req.params.codigo;
    if (valor) {
        await Placa_madre.updateOne({ codigo: valor }, {

            marca: req.body.marca,
            fabricante: req.body.fabricante,
            tecnologia: req.body.tecnologia,
            cap_vel: req.body.cap_vel,
            precio: req.body.precio,
        });
        const mostrar = await Placa_madre.findOne({ codigo: valor });
        if (mostrar == null) {
            res.send("No existe ese código");
            res.end();
        } else {
            return res.send(mostrar);
        }
    } else {
        res.send("Debe ingresar el código de la placa madre que desea editar");
    }
};
//borrar
module.exports.borrar = async(req, res) => {
    if (req.params.case && req.params.valor) {
        const valor = req.params.valor;
        switch (req.params.case) {
            case "marca":
                await Placa_madre.deleteMany({ marca: valor });
                const mostrar = await Placa_madre.find();
                res.send(mostrar);
                break;
            case "fabricante":
                await Placa_madre.deleteMany({ fabricante: valor });
                const fmostrar = await Placa_madre.find();
                res.send(fmostrar);
                break;
            case "modelo":
                await Placa_madre.deleteMany({ modelo: valor });
                const nmostrar = await Placa_madre.find();
                res.send(nmostrar);
                break;

            case "precio":
                await Placa_madre.deleteMany({ precio: valor });
                const pmostrar = await Placa_madre.find();
                res.send(pmostrar);
                break;

            default:
                res.send("La propiedad que ha ingresado no existe");
                break;
        }
    } else {
        const codigon = req.params.case;
        await Placa_madre.deleteOne({ codigo: codigon });
        const mostrar = await Placa_madre.find();
        return res.send(mostrar);
    }
};