const Infor = require("../models/infor")

class info{
  constructor() {}
  async consultar() {
    return await Infor.find()
  }
  async guardar(req, res) {
    const info = new Infor(req);
    await info.save();
<<<<<<< HEAD
    return info;
  }
  async buscar (req) {
    const info = await Informacion.find({});
    return info;
=======
    const mensaje = `Se ha registrado ${req.nombre} como contacto correctamente`
    return mensaje
  }  
  async eliminar(req) {
    await Infor.findByIdAndRemove({ _id: req.id });
    const mensaje = `Se ha eliminado correctamente`
    return mensaje
>>>>>>> 1e6649b65276dffdff974359a7cc51d7ccc2bf54
  }
}

module.exports = info;
