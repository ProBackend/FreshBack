/**
 * @param {String} string a comprobar
 * @returns {String}  string capitalizado
 * @description Capitaliza las palabras de un string
 */
function capitalizarPalabras (string) {
  if (string) {
    const textoSinEspacios = string.trim().replace(/\s+/g, ' ')
    const arrayDePalabras = textoSinEspacios.split(' ')
    const arrayDePalabrasConFormato = arrayDePalabras.map(
      p => p.charAt(0).toUpperCase() + p.slice(1)
    )
    const stringConFormato = arrayDePalabrasConFormato.join(' ')
    return stringConFormato
  }
}
export { capitalizarPalabras }