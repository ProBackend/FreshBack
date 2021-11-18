const Informacion = require("../models/infor")

module.exports.guardar = async(req, res) => {
    const info = new Informacion({
        nombre: 'pedro',
        apellido: 'salinas',
        direccion: 'av los callaos',
        descripcion: 'Chef',
        telefono: '04123366548'
    });
    await info.save();
    res.send("Guardado")
}