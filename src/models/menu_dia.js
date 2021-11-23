const { Schema, model } = require("mongoose");
const Menuschema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  productos: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  path: {
    type: String,
  },
  activo: {
    type: Boolean,
    default: false,
  }
});

module.exports = model("Menu", Menuschema);