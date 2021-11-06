const { Schema, model } = require("mongoose");
const Ramschema = new Schema({
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
    //capacidad de velocidad
    cap_vel: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
});

module.exports = model("Ram", Ramschema);