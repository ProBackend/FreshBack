const Clientes = require('../models/cliente.js');

class cliente {
  constructor(){}
  async consultar(req, One){
    const consulta = await Clientes.find()
    return consulta
  }
  async guardar(req) {
    const consulta = await this.consultar(req, true)
    if (consulta.Email == null && consulta.User == null) {
      let { nombre, apellido, user, password, correo } = req.body
      const clientela = new Clientes({ nombre, apellido, user, password, correo });
      clientela.password = await clientela.encryptPass(clientela.password);
      await clientela.save();
      return true
    }else {
      return false
    }
  }
}

module.exports = cliente;