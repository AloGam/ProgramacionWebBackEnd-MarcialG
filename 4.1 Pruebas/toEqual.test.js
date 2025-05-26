const crearCarro = require('./toEqual');
test('Dos objetos con las mismas propiedades y valores son iguales', () => {
  const carro1 = crearCarro('Tsuru', 10);
  const carro2 = crearCarro('Tsuru', 10);

  expect(carro1).toEqual(carro2);
});