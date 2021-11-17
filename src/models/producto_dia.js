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
        type: Number,
        required: true,
    },
    oferta: {
        type: Number,
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
>>>>>>> 0b1901cf0490336d540b373349b1cbb771795bfb
});

module.exports = model("Pr_dia", Pr_diaschema);