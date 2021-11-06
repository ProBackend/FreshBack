const { Schema, model } = require("mongoose");
const Tarjetavschema = new Schema({
    codigo: {
        type: Number,
        unique: true,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },

    fabricante: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    //año de creación
    ano: {
        type: Number,
        required: true,
    },
    //memoria cache
    resolucion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
});

module.exports = model("Tarjetav", Tarjetavschema);