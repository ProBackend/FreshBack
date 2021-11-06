const { Schema, model } = require("mongoose");
const procesadorschema = new Schema({
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
    nucleo: {
        type: String,
        required: true,
    },
    vel_fun: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
});

module.exports = model("Procesador", procesadorschema);