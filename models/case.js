const { Schema, model } = require("mongoose");
const Caseschema = new Schema({
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
    dimension: {
        type: String,
        required: true,
    },
    //capacidad de velocidad
    peso: {
        type: Number,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    }
});

module.exports = model("Case", Caseschema);