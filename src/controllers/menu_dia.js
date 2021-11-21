const MenuDia = require("../models/menu_dia");
class menuDia{
    constructor(req) {}
    async consultar() {
      const consulta = await MenuDia.find()
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
  }

// module.exports.guardar = async(req, res) => {
//     const { nombre, ingredientes, precio } = req.body;

//     if (!nombre || !ingredientes || !precio || !req.file) {
//         return res.send("Ingrese la información correctamente")
//     }

//     const menu_dia = new Menu_dia({
//         nombre: nombre,
//         ingredientes: ingredientes,
//         precio: precio,
//         filename: req.file.filename,
//         path: "/uploads/" + req.file.filename,
//         orinalname: req.file.originalname,
//         mimetype: req.file.mimetype,
//         size: req.file.size
//     })

//     await menu_dia.save()

//     return res.send("Guardado con exito")
// };

// module.exports.mostrar = async(req, res) => {

//     const p = "menu"

//     const mostrart = await Menu_dia.find();

//     res.render("pmostrar", { mostrart, p });


// }

// module.exports.edit = async(req, res) => {
//     const p = "menu"
//     const id = req.params.id
//     const mostrar_id = await Menu_dia.findById(id)
//     if (id == null) {
//         res.send("No existe ese código");
//         res.end();
//     } else {

//         res.render("peditar", { mostrar_id, p })
//     }
// }

// module.exports.editar = async(req, res) => {
//     const valor = req.params.id;
//     if (req.file) {
//         await Menu_dia.updateOne({ id: valor }, {
//             nombre: req.body.nombre,
//             ingredientes: req.body.ingredientes,
//             precio: req.body.precio,
//             filename: req.file.filename,
//             path: "/uploads/" + req.file.filename,
//             orinalname: req.file.originalname,
//             mimetype: req.file.mimetype,
//             size: req.file.size
//         })
//     } else {
//         await Menu_dia.updateOne({ id: valor }, {
//             nombre: req.body.nombre,
//             ingredientes: req.body.ingredientes,
//             precio: req.body.precio
//         })
//     }

//     return res.send("Se ha editado correctamente");
// }

// module.exports.delete = async(req, res) => {
//     const codigon = req.params.id;
//     await Menu_dia.deleteOne({ id: codigon });
//     return res.send("Se ha eliminado");
// }

module.exports = menuDia