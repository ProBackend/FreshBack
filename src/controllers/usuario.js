require('../connection')
const Usuario = require("../models/usuario");

const jwt = require('jsonwebtoken');
const config = require('../config')

class userclass{
  constructor() {}
  async guardar (nombre, apellido, usuario, clave, correo) {
    const adm = new Usuario({ nombre, apellido, usuario, clave, correo });
    adm.clave = await adm.encryptClave(adm.clave);
    await adm.save();
    const token = jwt.sign({id: adm._id, tipo: 'Cliente'}, config.secret, {
      expiresIn: 60 * 60 * 12
    });
    return ({token});
  }
  async guardargere (nombre, apellido, usuario, clave, correo) {
    const adm = new Usuario({ nombre, apellido, usuario, clave, correo, rol: 'Gerente' });
    adm.clave = await adm.encryptClave(adm.clave);
    await adm.save();
    const token = jwt.sign({id: adm._id, tipo: 'Gerente'}, config.secret, {
      expiresIn: 60 * 60 * 12
    });
    return ({token});
  }
  async entrar (s) {
    const h = await Gerente.findOne({usuario: s.usuario});
    if (!h) {
      return {
        auth: false,
        status: 'No existe este usuario'
      };
    };
    const clavecom = await h.verifyClave(s.clave);
    if (!clavecom) {
      return {
        auth: false,
        status: 'Usuario o contrseña incorrecta'
      };
    }
    const token = jwt.sign({id: h._id, tipo: 'Gerente'}, config.secret, {
      expiresIn: 60 * 60 * 12
    });
    return {auth: true, token};
  }
}

module.exports = userclass;