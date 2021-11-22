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
      const token = jwt.sign({id: adm._id, tipo: 'Cliente'}, config.secret, {
        expiresIn: 60 * 60 * 12
      });
      return {tokencont: true, token: token, clientela: clientela}
    }
    return {tokencont: false}
  }
}

module.exports = cliente;