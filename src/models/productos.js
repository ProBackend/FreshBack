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
  }
});

module.exports = model("Producto", Productoschema);