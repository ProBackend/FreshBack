const { Schema, model } = require("mongoose");
const Infoschema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        default: "empleado"
    },
    telefono: {
        type: String,
        required: true,
    }
});

module.exports = model("Info", Infoschema);