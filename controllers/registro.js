const Registro = require("../models/registro");

module.exports.rgt = async(req, res) => {

    const { user, password } = req.body;
    if (!user || !password) {
        return res.send("Ingrese la información correctamente.");
    }
    const usern = await Registro.findOne({ user });
    if (usern) {
        return res.send("Ya existe ese user");
    }

    const registro = new Registro({
        user: req.body.user,
        password: req.body.password,
    });
    await registro.save();

    return res.send("Guardado con exito");
};

module.exports.check = async(req, res, next) => {
    const user = req.params.user;
    const password = req.params.password;

    if (!user && !password) {
        res.send("Debe registrarse primero, antes de ejecutar cualquier operación");
        res.end();
    } else {
        const usern = await Registro.findOne({ user });
        if (usern) {
            if (usern.password !== password) {
                if (!password) {
                    res.send("Ingresa la contraseña.");
                    res.end();
                } else {
                    res.send("Clave erronea");
                    res.end();
                }
            } else {
                next();
            }
        } else {
            res.send("No existe ese usuario");
            res.end();
        }
    }
};