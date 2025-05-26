const contieneSubcadena = require('./Expresiones');
test('verifica si contiene subcadena', () => {
  const mensaje = "Hola mundo prueba de toMatch";
  expect(mensaje).toMatch(/mundo/);
});
