const ProDia = require("../models/producto_dia");
class proDia{
    constructor(req) {}
    async consultar() {
      const consulta = await ProDia.find()
      return consulta
    }
    // pruebassa(token) {
    //   if(token){
    //     token = false
    //   } else{
    //     token = true;
    //   }
    //   console.log('asdasdasAAA')
    //   return token
    // }
    async guardar(req) {
      const pro = new ProDia(req);
      await pro.save();
      const mensaje = `Se ha registrado ${req.nombre} como producto del día correctamente`
      return mensaje
    }
    
    async eliminar(req) {
        await ProDia.findByIdAndRemove({ _id: req.id });
        const mensaje = `Se ha eliminado correctamente`
        return mensaje
    }
  }

module.exports = proDia