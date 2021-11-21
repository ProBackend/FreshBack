const Infor = require("../models/infor")

class info{
  constructor() {}
  async consultar() {
    return await Infor.find()
  }
  async guardar(req, res) {
    const info = new Infor({
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
