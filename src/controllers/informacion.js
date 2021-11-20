const Infor = require("../models/infor")

class info{
  constructor(req) {}
  async consultar() {
    const consulta = await Infor.find()
    return consulta
  }
  pruebassa(token) {
    if(token){
      token = false
    } else{
      token = true;
    }
    console.log('asdasdasAAA')
    return token
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
    console.log("Guardado")
  }
}

module.exports = info