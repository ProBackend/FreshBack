require('../connection')
const Usuario = require("../models/usuario");
const jwt = require('jsonwebtoken');
const config = require('../config')

class Usuarios {
  async guardar(req) {
    const cliente = new Usuario(
      {
        nombre: req.nombre,
        apellido: req.apellido,
        usuario: req.usuario,
        clave: req.clave,
        correo: req.correo
      }
    );
    cliente.clave = await cliente.encryptClave(cliente.clave);
    await cliente.save();
    const token = jwt.sign({ id: cliente._id }, config.secret, {
      expiresIn: 60 * 60 * 12
    });
    return token
  }
  async guardargere(req) {
    const gerente = new Usuario(
      {
        nombre: req.nombre,
        apellido: req.apellido,
        usuario: req.usuario,
        clave: req.clave,
        correo: req.correo,
        rol: 'Gerente'
      }
    );
    gerente.clave = await gerente.encryptClave(gerente.clave);
    await gerente.save();
    const token = jwt.sign({ id: gerente._id }, config.secret, {
      expiresIn: 60 * 60 * 12
    });
    return token
  }
  async login(req) {
    const usuario = await Usuario.findOne({ usuario: req.usuario })
    if (!usuario) {
      return false
    }
    let veri = await usuario.verifyClave(req.clave)
    if (!veri) {
      return false
    }
    const token = jwt.sign({ id: usuario._id }, config.secret, {
      expiresIn: 60 * 60 * 12
    });
    return token
  }
}

iniciar();

async function iniciar() {
  const adm = await Usuario.findOne({ usuario: 'Administrador' });
  if (!adm) {
    admnew = new Usuario({
      nombre: 'Gerente',
      apellido: 'Gerente',
      usuario: 'Administrador',
      clave: 'clave',
      correo: 'correo@gmail.com',
      rol: 'Gerente'
    })
    admnew.clave = await admnew.encryptClave(admnew.clave);
    await admnew.save();
  }
}

module.exports = Usuarios;