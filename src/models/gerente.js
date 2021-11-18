const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs');

const Gerenteschema = new Schema({
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
  contacto: {
    type: String,
    unique: true,
    required: true,
  }
});

Gerenteschema.methods.encryptClave = async (clave) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(clave, salt);
};

module.exports = model("Gerente", Gerenteschema);