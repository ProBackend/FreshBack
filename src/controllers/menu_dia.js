const MenuDia = require("../models/menu_dia");
class menuDia {
  constructor(req) { }
  async consultar() {
    return await MenuDia.find()
  }
  async guardar(req) {
    const menu = new MenuDia(req);
    await menu.save();
    return `Se ha registrado ${req.nombre} como menú del día correctamente`
  }
  async eliminar(req) {
      await MenuDia.findByIdAndRemove({ _id: req.id });
      return `Se ha eliminado correctamente`
  }
  async editar(req) {
      await MenuDia.updateOne({ _id: req.id }, {
          nombre: req.nombre,
          productos: req.productos,
          precio: req.precio,
          path: req.path,
      })
      return`Se ha actualizado ${req.nombre} correctamente`
  }
}

module.exports = menuDia