const Menu_dia = require("../models/menu_dia");

module.exports.guardar = async(req, res) => {
    const { nombre, ingredientes, precio } = req.body;

    if (!nombre || !ingredientes || !precio || !req.file) {
        return res.send("Ingrese la información correctamente")
    }

    const Menu = new Menu_dia({
        nombre: nombre,
        ingredientes: ingredientes,
        precio: precio,
        filename: req.file.filename,
        path: "/uploads/" + req.file.filename,
        orinalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
    })

    await Menu.save()

    return res.send("Guardado con exito")
};

module.exports.mostrar = async(req, res) => {


    const mostrart = await Menu.find();
    res.render("pmostrar", { mostrart });


}

module.exports.edit = async(req, res) => {
    const id = req.params.id
    const mostrar_id = await Menu.findById(id)
    if (id == null) {
        res.send("No existe ese código");
        res.end();
    } else {
        res.render("peditar", { mostrar_id })
    }
}

module.exports.editar = async(req, res) => {
    const valor = req.params.id;

    await Menu.updateOne({ id: valor }, {
        nombre: req.body.nombre,
        ingredientes: req.body.ingredientes,
        precio: req.body.precio,
        filename: req.file.filename,
        path: "/uploads/" + req.file.filename,
        orinalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
    })
    return res.send("Se ha editado correctamente");
}

module.exports.delete = async(req, res) => {
    const codigon = req.params.id;
    await Menu.deleteOne({ id: codigon });
    return res.send("Se ha eliminado");
}