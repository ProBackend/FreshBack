const { Schema, model } = require("mongoose");
const Pedidoschema = new Schema({
    nombre: {
        type: String,
        required: true,
    },

    precio: {
        type: Number,
        required: true,
    },
    delivery: {
        type: String,
    }
});

module.exports = model("Pedido", Pedidoschema);