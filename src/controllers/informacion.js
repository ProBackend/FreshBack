const Infor = require("../models/infor")

class info{
  constructor() {}
  async consultar() {
    return await Infor.find()
  }
  async guardar(req, res) {
    const info = new Infor(req);
    await info.save();
    const mensaje = `Se ha registrado ${req.nombre} como contacto correctamente`
    return mensaje
  }  
  async eliminar(req) {
    await Infor.findByIdAndRemove({ _id: req.id });
    const mensaje = `Se ha eliminado correctamente`
    return mensaje
  }
}

module.exports = info