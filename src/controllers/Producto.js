const Producto = require("../models/productos");
class pro{
  constructor(req) {}
  async consultar() {
    return await Producto.find()
  }

  async guardar(req) {
    await new Producto(req).save();
    return `Se ha registrado ${req.nombre} como producto regular correctamente`
  }

  async eliminar(req) {
    await Producto.findByIdAndRemove({ _id: req.id });
    const mensaje = `Se ha eliminado correctamente`
    return mensaje
  }

  async editar(req) {
    await Producto.updateOne({ _id: req.id }, {
      nombre: req.nombre,
      ingredientes: req.ingredientes,
      precio: req.precio,
      path: req.path,
    })

    const mensaje = `Se ha actualizado ${req.nombre} correctamente`
    return mensaje
  }
}

module.exports = pro