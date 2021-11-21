const { Schema, model } = require("mongoose");
const Menuschema = new Schema({
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
    path: {
        type: String,
    }
});

module.exports = model("Menu", Menuschema);