const elementoContenido = require('./Contenido');
describe('Verificación de contenido en arrays', () => {
  test('verifica si el array contiene un elemento específico', () => {
    const frutas = ['manzana', 'banana', 'pera', 'uva'];
    
    expect(elementoContenido(frutas, 'banana')).toBe(true);
    expect(frutas).toContain('banana');
  });

  test('retorna false si el elemento no está en el array', () => {
    const colores = ['rojo', 'azul', 'verde'];

    expect(elementoContenido(colores, 'amarillo')).toBe(false);
    expect(colores).not.toContain('amarillo');
  });
});