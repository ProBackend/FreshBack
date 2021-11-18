const { Schema, model } = require("mongoose");
const Pr_diaschema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    ingredientes: {
        type: String,
        required: true,
    },
    //precio regular
    precio_r: {
        type: Number,
        required: true,
    },
    oferta: {
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
    },
});

module.exports = model("Pr_dia", Pr_diaschema);