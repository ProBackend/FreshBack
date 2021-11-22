const { Schema, model } = require("mongoose");
const Pr_diaschema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  ingredientes: {
    type: String,
    required: true,
  },
  //precio regular
  precio_r: {
    type: String,
    required: true,
  },
  oferta: {
    type: String,
    required: true,
  },
  path: {
    type: String,
  }
});

module.exports = model("Pr_dia", Pr_diaschema);