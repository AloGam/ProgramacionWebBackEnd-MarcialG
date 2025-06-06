const { Resta } = require('./resta');
/*
describe('Pruebas de Exhaustivas con Jest', () => {
    test('Caso prueba normal', () => {
        expect(Resta(2, 5)).toBe(-3);
    });
    test('Caso prueba decimal', () => {
        expect(Resta(2.5, 1.3)).toBe(1.2);
    });
    test('Caso prueba frontera', () => {
        expect(Resta(0, 5)).toBe(-5);
    });
    test('Caso prueba frontera con numeros mayores', () => {
        expect(Resta(Number.MAX_SAFE_INTEGER, 5));
    });
    test('Caso prueba fuera de rango', () => {
        expect(Resta(Number.MAX_SAFE_INTEGER + 5, 5)).toBe(Number.MAX_SAFE_INTEGER);
    });
    test('Caso prueba invalido no definido', () => {
        expect(Resta(undefined, 5)).toBeNaN();
    });
    test('Caso prueba invalido sin argumentos', () => {
        expect(Resta()).toBeNaN();
    });
    test('Caso prueba por tipo nulo', () => {
        expect(Resta(null, 5)).toBe(-5);
    });
    test('Caso prueba por tipo cadena', () => {
        expect(Resta('2', 5)).toBe(-3);
    });
    test('Caso prueba por negativo (0)', () => {
        expect(Resta(0, 0)).toBe(0);
    });
    test('Caso prueba por negativo (negativo)', () => {
        expect(Resta(-2, -5)).toBe(3);
    });
});
*/
// ahora la funcion sigue siendo una resta, pero este ya no realiza una resta sino una division
describe('Pruebas de Exhaustivas con Jest: division', () => {
    test('Caso prueba normal', () => {
        expect(Resta(2, 5)).toBe(0.4);
    });
    test('Caso prueba decimal', () => {
        expect(Resta(1.5, 0.3)).toBe(5);
    });
    test('Caso prueba frontera', () => {
        expect(Resta(0, 5)).toBe(0);
    });
    test('Caso prueba frontera con numeros mayores', () => {
        expect(Resta(Number.MAX_SAFE_INTEGER, 5)).toBe(Number.MAX_SAFE_INTEGER / 5);
    });
    test('Caso prueba fuera de rango', () => {
        expect(Resta(Number.MAX_SAFE_INTEGER + 5, 5)).toBe((Number.MAX_SAFE_INTEGER + 5) / 5);
    });
    test('Caso prueba invalido no definido', () => {
        expect(Resta(undefined, 5)).toBeNaN();
    });
    test('Caso prueba invalido sin argumentos', () => {
        expect(Resta()).toBeNaN();
    });
    test('Caso prueba por tipo nulo', () => {
        expect(Resta(null, 5)).toBe(0);
    });
    test('Caso prueba por tipo cadena', () => {
        expect(Resta('2', 5)).toBe(0.4);
    });
    test('Caso prueba por negativo (0)', () => {
        expect(Resta(0, 0)).toBeNaN();
    });
    test('Caso prueba por ambos negativos', () => {
        expect(Resta(-5, -2)).toBe(2.5);
    });
});