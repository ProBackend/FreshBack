const { Schema, model } = require("mongoose");
const Discodschema = new Schema({
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
    tecnologia: {
        type: String,
        required: true,
    },
    //capacidad de almacenamiento
    cap_alm: {
        type: String,
        required: true,
    },
    //memoria cache
    cache: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
});

module.exports = model("Discod", Discodschema);