const verificarValor = require('./Verificar');
test('Verificación de valores nulos y definidos', () => {
  let valorNulo = null;
  let valorIndefinido;
  let valorDefinido = 42;

  expect(valorNulo).toBeNull(); // Verifica que sea null
  expect(valorIndefinido).toBeUndefined(); // Verifica que sea undefined
  expect(valorDefinido).toBeDefined(); // Verifica que está definido
});
