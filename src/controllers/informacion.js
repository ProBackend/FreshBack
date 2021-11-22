const Infor = require("../models/infor")

class info{
  constructor() {}
  async consultar() {
    return await Infor.find()
  }
  async guardar(req, res) {
    await new Infor(req).save();
    return `Se ha registrado ${req.nombre} como contacto correctamente`
  }
  async eliminar(req) {
    await Infor.findByIdAndRemove({ _id: req.id });
    return `Se ha eliminado correctamente`
  }
}

module.exports = info;
