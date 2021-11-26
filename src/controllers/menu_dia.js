const MenuDia = require("../models/menu_dia");
class menuDia {
    constructor(req) { }
    async consultar() {
        const consulta = await MenuDia.find()
        return consulta
    }
    async guardar(req) {
        const menu = new MenuDia(req);
        await menu.save();
        const mensaje = `Se ha registrado ${req.nombre} como menú del día correctamente`
        return mensaje
    }

    async eliminar(req) {
        await MenuDia.findByIdAndRemove({ _id: req.id });
        const mensaje = `Se ha eliminado correctamente`
        return mensaje
    }

    async editar(req) {

        await MenuDia.updateOne({ _id: req.id }, {
            nombre: req.nombre,
            productos: req.productos,
            precio: req.precio,
            path: req.path,
        })

        const mensaje = `Se ha actualizado ${req.nombre} correctamente`
        return mensaje
    }
}

module.exports = menuDia