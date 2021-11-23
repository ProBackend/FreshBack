require('../connection')
const Usuario = require("../models/usuario");

const jwt = require('jsonwebtoken');
const config = require('../config')

class userclass{
  constructor() {}
  async guardar (nombre, apellido, usuario, clave, contacto) {
    const adm = new Usuario({ nombre, apellido, usuario, clave, contacto });
    adm.clave = await adm.encryptClave(adm.clave);
    await adm.save();
    const token = jwt.sign({id: adm._id, tipo: 'Gerente'}, config.secret, {
      expiresIn: 60 * 60 * 12
    });
    return ({auth: true, token});
  }
  async entrar (s) {
    const h = await Gerente.findOne({usuario: s.usuario});
    if (!h) {
      return {
        auth: false,
        message: 'No existe este usuario'
      };
    };
    const clavetemp = await h.encryptClave(s.clave);
    if (clavetemp !== h.clave) {
      return {
        auth: false,
        message: 'Usuario o contrseña incorrecta'
      };
    }
    const token = jwt.sign({id: h._id, tipo: 'Gerente'}, config.secret, {
      expiresIn: 60 * 60 * 12
    });
    return ({auth: true, token});
  }
}

module.exports = userclass;