const ProDia = require("../models/producto_dia");
class proDia{
    constructor(req) {}
    async consultar() {
      const consulta = await ProDia.find()
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
  }

// module.exports.guardar = async(req, res) => {
//     const { nombre, ingredientes, precio_r, oferta } = req.body;

//     if (!nombre || !ingredientes || !precio_r || !oferta || !req.file) {
//         return res.send("Ingrese la información correctamente")
//     }

//     const productodia = new Pr_dia({
//         nombre: nombre,
//         ingredientes: ingredientes,
//         precio_r: precio_r,
//         oferta: oferta,
//         filename: req.file.filename,
//         path: "/uploads/" + req.file.filename,
//         orinalname: req.file.originalname,
//         mimetype: req.file.mimetype,
//         size: req.file.size
//     })

//     await productodia.save()

//     return res.send("Guardado con exito")
// };

// module.exports.mostrar = async(req, res) => {

//     const mostrart = await Pr_dia.find();
//     res.render("pdmostrar", { mostrart });


// }

// module.exports.edit = async(req, res) => {

//     const id = req.params.id
//     const mostrar_id = await Pr_dia.findById(id)
//     if (id == null) {
//         res.send("No existe ese código");
//         res.end();
//     } else {
//         res.render("peditar", { mostrar_id })
//     }
// }

// module.exports.editar = async(req, res) => {
//     const valor = req.params.id;
//     if (req.file) {
//         await Pr_dia.updateOne({ id: valor }, {
//             nombre: req.body.nombre,
//             ingredientes: req.body.ingredientes,
//             precio_r: req.body.precio_r,
//             oferta: req.body.oferta,
//             filename: req.file.filename,
//             path: "/uploads/" + req.file.filename,
//             orinalname: req.file.originalname,
//             mimetype: req.file.mimetype,
//             size: req.file.size
//         })
//     } else {
//         await Pr_dia.updateOne({ id: valor }, {
//             nombre: req.body.nombre,
//             ingredientes: req.body.ingredientes,
//             precio_r: req.body.precio_r,
//             oferta: req.body.oferta
//         })
//     }

//     return res.send("Se ha editado correctamente");
// }

// module.exports.delete = async(req, res) => {
//     const codigon = req.params.id;
//     await Pr_dia.deleteOne({ id: codigon });
//     return res.send("Se ha eliminado");
// }

module.exports = proDia