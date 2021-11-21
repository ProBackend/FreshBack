const Clientes = require('../models/cliente.js');

class cliente {
  constructor(){}
  async consultar(req, One){
    const consulta = await Clientes.find()
    return consulta
  }
  async guardar(req) {
    const Email = await Clientes.findOne({correo: req.correo})
    const User = await Clientes.findOne({user: req.user})
    if (!Email && !User) {
      await new Clientes(req).save();
      return true
    }else {
      return false
    }
  }
}
module.exports = cliente