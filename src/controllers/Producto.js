const Producto = require("../models/productos");
class pro{
  constructor(req) {}
  async consultar() {
    const consulta = await Producto.find()
    return consulta
  }
  // pruebassa(token) {
  //   if(token){
  //     token = false
  //   } else{
  //     token = true;
  //   }
  //   console.log('asdasdasAAA')
  //   return token
  // }
  async guardar(req) {
    const pro = new Producto(req);
    await pro.save();
    const mensaje = `Se ha registrado ${req.nombre} como producto regular correctamente`
    return mensaje
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

// module.exports.edit = async(req, res) => {
//   const p = "productos"
//   const id = req.params.id
//   const mostrar_id = await Producto.findById(id)
//   if (id == null) {
//     res.send("No existe ese código");
//     res.end();
//   } else {
//     res.render("peditar", { mostrar_id, p })
//   }
// }

// module.exports.editar = async(req, res) => {
//   const valor = req.params.id;
//   if (req.file) {
//     await Producto.updateOne({ id: valor }, {
//       nombre: req.nombre,
//       ingredientes: req.body.ingredientes,
//       precio: req.body.precio,
//       filename: req.file.filename,
//       path: "/uploads/" + req.file.filename,
//       orinalname: req.file.originalname,
//       mimetype: req.file.mimetype,
//       size: req.file.size
//     })
//   } else {
//     await Producto.updateOne({ id: valor }, {
//       nombre: req.body.nombre,
//       ingredientes: req.body.ingredientes,
//       precio: req.body.precio
//     })
//   }
//   return res.send("Se ha editado correctamente");
// }

// module.exports.delete = async(req, res) => {
//   const codigon = req.params.id;
//   await Producto.deleteOne({ id: codigon });
//   return res.send("Se ha eliminado");
// }

module.exports = pro