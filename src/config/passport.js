const passport = require('passport');
const localpassport = require('passport-local').Strategy;
const Clientes = require('../models/cliente')
const client = new Clientes;

passport.use(new localpassport({
  usernameField: 'user'
}, async (user, password, done) => {
  let encripas = await client.encryptPass(password);
  const usuario = await Clientes.findOne({user: user});
  if (!usuario) {
    return done(null, false, { status: 'Usuario no encontrado'})
  };
  const cliente = await Clientes.findOne({password: encripas, user: user});
  console.log(cliente)
  if (!cliente) {
    return done({ status: 'La contraseña no coincide con el usuario'});
  };
  return done(null, cliente);
}));

passport.serializeUser((clave, done)=> {
  done(null, clave.id);
});

passport.deserializeUser((id, done) => {
  Clientes.findById(id, (err, cliente) => {
    done(err, cliente);
  });
});