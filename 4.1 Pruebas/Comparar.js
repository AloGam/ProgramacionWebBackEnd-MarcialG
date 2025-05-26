function compararNumeros(a, b) {
  if (a > b) return "mayor";
  if (a < b) return "menor";
  return "igual";
}

module.exports = compararNumeros;