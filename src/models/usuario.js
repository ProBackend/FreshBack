const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs');

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    unique: true,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
  }
});

UsuarioSchema.methods.encryptClave = async (clave) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(clave, salt);
};

UsuarioSchema.methods.verifyClave = function (clave) {
  return bcrypt.compare(clave, this.password);
};

module.exports = model("Usuario", UsuarioSchema);