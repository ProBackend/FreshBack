require('../connection')
const Informacion = require("../models/infor")

class info{
  constructor(req) {}
  async guardar (req) {
    const info = new Informacion({
      nombre: 'pedro',
      apellido: 'salinas',
      direccion: 'av los callaos',
      descripcion: 'Chef',
      telefono: '04123366548'
    });
    await info.save();
    return info;
  }
  async buscar (req) {
    const info = await Informacion.find({});
    return info;
  }
}

module.exports = info;