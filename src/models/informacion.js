const { Schema, model } = require("mongoose");

const informacioneschema = new Schema({
  nombre: {
    typo: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    default: 'Empleado'
  },
  telefono: {
    type: String,
    required: true
  }
});

module.exports = model("Informacion", informacioneschema);