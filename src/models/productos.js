const { Schema, model } = require("mongoose");
const Productoschema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  ingredientes: {
    type: String,
    required: true,
  },

<<<<<<< HEAD
    precio: {
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
  precio: {
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

module.exports = model("Producto", Productoschema);