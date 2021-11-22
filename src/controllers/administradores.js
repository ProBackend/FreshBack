require('../connection')
const Gerente = require("../models/gerente")
const Clientes = require('../models/cliente.js');

const jwt = require('jsonwebtoken');
const config = require('../config')

class adminis{
  constructor() {}
  async guardar (nombre, apellido, usuario, clave, contacto) {
    console.log(nombre, apellido, usuario, clave, contacto);
    const adm = new Gerente({ nombre, apellido, usuario, clave, contacto });
    adm.clave = await adm.encryptClave(adm.clave);
    await adm.save();
    const token = jwt.sign({id: adm._id, tipo: 'Gerente'}, config.secret, {
      expiresIn: 60 * 60 * 12
    });
    return ({auth: true, token});
  }

  async accesa (h) {
    const token = h
    if (!token) {
      return {
        auth: false,
        message: 'No se envió el Token'
      };
    };
    const decodificado = jwt.verify(token, config.secret);
    if (decodificado.tipo === 'Gerente') {
      const admibus = await Gerente.findById(decodificado.id, { clave: 0 });
      if (!admibus) {
        return ({auth: false, message: 'No se encontró el gerente'});
      };
      return ({auth: true, gerente: true, admibus});
    }
    if (decodificado.tipo === 'Cliente') {
      const cliebus = await Clientes.findById(decodificado.id, { password: 0 });
      if (!cliebus) {
        return ({auth: true, message: 'No se encontró el cliente'});
      };
      return ({auth: true, gerente: false, cliebus});
    }
    return ({auth: false, message: 'No existe un token válido'});
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

module.exports = adminis;