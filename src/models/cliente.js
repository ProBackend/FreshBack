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
  user: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    sparce: true
  }
});

Clienteschema.methods.encryptPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

module.exports = model("Cliente", Clienteschema);