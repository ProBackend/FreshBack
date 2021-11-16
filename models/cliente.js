const { Schema, model } = require("mongoose");
const Clienteschema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },

    usuario: {
        type: String,
        unique: true,
        required: true,
    },
    clave: {
        type: String,
        required: true,
    },

    contacto: {
        type: String,
        required: true,
    }
});

module.exports = model("Cliente", Clienteschema);