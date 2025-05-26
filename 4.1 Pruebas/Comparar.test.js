const compararNumeros = require('./Comparar');

describe('Comparaciones numéricas', () => {
  test('a es mayor que b', () => {
    const a = 10;
    const b = 5;
    expect(a).toBeGreaterThan(b);
    expect(compararNumeros(a, b)).toBe("mayor");
  });

  test('a es menor que b', () => {
    const a = 3;
    const b = 7;
    expect(a).toBeLessThan(b);
    expect(compararNumeros(a, b)).toBe("menor");
  });

  test('a es igual a b', () => {
    const a = 8;
    const b = 8;
    expect(a).toBeGreaterThanOrEqual(b);
    expect(compararNumeros(a, b)).toBe("igual");
  });
});