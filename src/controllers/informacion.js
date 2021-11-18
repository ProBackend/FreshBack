// pueden comentar las cosas de mongodb y ver que si funciona el paso de informacion por el objeto info
/*
require('../connection')
const Informacion = require("../models/infor")
*/
class info{
  constructor(req) {}
  /*async guardad(req, res) {
    const info = new Informacion({
      nombre: 'pedro',
      apellido: 'salinas',
      direccion: 'av los callaos',
      descripcion: 'Chef',
      telefono: '04123366548'
    });
    await info.save();
    console.log("Guardado")
  }*/
  pruebassa(token) {
    if(token){
      token = false
    } else{
      token = true;
    }
    console.log('asdasdasAAA')
    return token
  }
}

module.exports = info