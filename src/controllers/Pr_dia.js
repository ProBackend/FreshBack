const ProDia = require("../models/producto_dia");
class proDia{
    constructor(req) {}
    async consultar() {
      const consulta = await ProDia.find()
      return consulta
    }
    async guardar(req) {
      const pro = new ProDia(req);
      await pro.save();
      const mensaje = `Se ha registrado ${req.nombre} como producto del día correctamente`
      return mensaje
    }
    async eliminar(req) {
        await ProDia.findByIdAndRemove({ _id: req.id });
        const mensaje = `Se ha eliminado correctamente`
        return mensaje
    }
    async editar(req) {
      console.log(req)
      await Producto.updateOne({ _id: req.id }, {
        nombre: req.nombre,
        ingredientes: req.ingredientes,
        precio_r: req.precio_r,
        oferta: req.oferta,
        path: req.path,
      })
      return `Se ha actualizado ${req.nombre} correctamente`
    }
  }

module.exports = proDia