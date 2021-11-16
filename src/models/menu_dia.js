const { Schema, model } = require("mongoose");
const Menuschema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  ingredientes: {
    type: String,
    required: true,
  },
  precio: {
    type: String,
    required: true,
  }
});

module.exports = model("Menu", Menuschema);