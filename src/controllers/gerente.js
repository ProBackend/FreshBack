const Gerente = require('../models/gerente.js');

class gerente {
  constructor(){}
  async guardar(req) {
    const User = await Gerente.findOne({user: req.user})
    if (!User) {
      await new Gerente(req).save();
      return true
    }else {
      return false
    }
  }
}
module.exports = gerente