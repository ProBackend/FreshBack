const jwt = require('jsonwebtoken');
const config = require('../config')

function verify(req, res, next) {
  const token = req.headers('x-access-token');
  if (!token) {
    return res.status(401).json({
      auth: false,
      message: 'No se envió el Token'
    });
  };
  const decodificado = jwt.verify(token, config.secret);
  req.userid = decodificado.id;
  req.tipo = decodificado.tipo;
  next();
}

module.exports = verify;