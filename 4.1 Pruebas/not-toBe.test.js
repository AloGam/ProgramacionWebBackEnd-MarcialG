const Diferencia = require('./not-toBe');

test('verifica que los valores no sean iguales', () => {
  const a = 5;
  const b = 10;

  expect(a).not.toBe(b);
  expect(Diferencia(a, b)).toBe(true);
});