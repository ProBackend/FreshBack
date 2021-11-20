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
  async guardar(req, res) {
    const pro = new Producto(re.body);
    await pro.save();
    const mensaje = 'Te has registrado correctamente'
    return mensaje
  }
}

// module.exports.save = (req, res) => {
//   const url = req.params.productos
//   if (url == "productodia") {
//     res.render("productodia", { url })
//   } else {
//     res.render("Productos", { url })
//   }
// }

// module.exports.guardar = async(req, res) => {
//   const { nombre, ingredientes, precio } = req.body;

//   if (!nombre || !ingredientes || !precio || !req.file) {
//     return res.send("Ingrese la información correctamente")
//   }

//   const producto = new Producto({
//     nombre: nombre,
//     ingredientes: ingredientes,
//     precio: precio,
//     filename: req.file.filename,
//     path: "/uploads/" + req.file.filename,
//     orinalname: req.file.originalname,
//     mimetype: req.file.mimetype,
//     size: req.file.size
//   })

//   await producto.save()
//   return res.send("Guardado con exito")
// };

// module.exports.mostrar = async(req, res) => {
//   const p = "productos"
//   const mostrart = await Producto.find();
//   res.render("pmostrar", { mostrart, p });
// }

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
//       nombre: req.body.nombre,
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