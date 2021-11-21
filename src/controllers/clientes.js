const Clientes = require('../models/cliente.js');

class cliente {
  constructor(){}
  async consultar(req, One){
    if (One) {
      const Email = await Clientes.findOne({correo: req.correo})
      const User = await Clientes.findOne({user: req.user})
      return {Email, User}
    } else {
      return await Clientes.find()
    }
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