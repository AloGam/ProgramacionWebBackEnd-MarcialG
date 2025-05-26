function verificarValor(valor) {
  return {
    esNull: valor === null,
    esUndefined: valor === undefined,
    estaDefinido: valor !== undefined && valor !== null
  };
}
module.exports = verificarValor;