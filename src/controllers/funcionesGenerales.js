function validarTel(telefono) {
  return parseFloat(telefono) && /^\d{7,13}$/.test(telefono);
}

const capitalizar = (string) => {
  const textotoLowerCase = string.toLowerCase();
  const textoCapitalize = textotoLowerCase.replace(/(^\w|\s\w)/g, (m) =>
    m.toUpperCase(),
  );
  const textoSinEspacios = textoCapitalize.trim().replace(/\s+/g, ' ');
  string = textoSinEspacios;
  return string;
}

module.exports = { capitalizar, validarTel }