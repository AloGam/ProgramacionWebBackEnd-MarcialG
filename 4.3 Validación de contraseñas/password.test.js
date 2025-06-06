const validacionPassword = require('./passwordDebil');
//const validacionPassword = require('./password');

describe('Pruebas de validación de contraseñas seguras', () => {
  test('Caso normal: contraseña válida', () => {
    expect(validacionPassword("Tulum2019@")).toBe(true);
  });
  
  test('Caso frontera: exactamente 8 caracteres válidos', () => {
    expect(validacionPassword("2019T@lo")).toBe(true);
  });

  test('Caso fuera de limite: menos de 8 caracteres', () => {
    expect(validacionPassword("Abc1@")).toBe(false);
  });

  test('Caso no mayusculas: sin mayúscula', () => {
    expect(validacionPassword("tulum2019@")).toBe(false);
  });

  test('Caso no minusculas: sin minúscula', () => {
    expect(validacionPassword("TULUM2019@")).toBe(false);
  });

  test('Caso no numeros: sin número', () => {
    expect(validacionPassword("Tulum@@@")).toBe(false);
  });

  test('Caso no caracteres especiales: sin carácter especial', () => {
    expect(validacionPassword("Tulum2019")).toBe(false);
  });

  test('Caso palabra personal: contiene palabra personal "Marcial"', () => {
    expect(validacionPassword("Marcial2019@")).toBe(true);
  });

  test('Caso con espacio: contiene espacio', () => {
    expect(validacionPassword("Tulum 2019@")).toBe(false);
  });

  test('Caso sin argumentos: sin argumentos', () => {
    expect(validacionPassword()).toBe(false);
  });

  test('Caso tipo datos: tipo numérico en lugar de string', () => {
    expect(validacionPassword(12345678)).toBe(false);
  });

  test('Caso nulo: valor null', () => {
    expect(validacionPassword(null)).toBe(false);
  });

  test('Caso tipo cadena: uso de cadena con coerción de tipo (string "12345678")', () => {
    expect(validacionPassword("12345678")).toBe(false);
  });

});