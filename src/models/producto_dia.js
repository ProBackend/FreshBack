const { Schema, model } = require("mongoose");
const Pr_diaschema = new Schema({
<<<<<<< HEAD
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
    filename: {
        type: String,
    },
    path: {
        type: String,
    },
    originalname: {
        type: String,
    },
    mimetype: {
        type: String,
    },
    size: {
        type: Number,
    },
=======
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
  }
>>>>>>> 7a2530435634365a5572fa95bff263008c0015c0
});

module.exports = model("Pr_dia", Pr_diaschema);