const obtenerDatos = require('./Asincronas');

describe("Pruebas asíncronas con promesas", () => {
    test('resuelve correctamente la promesa', () => {
        return expect(obtenerDatos(true)).resolves.toBe("Datos obtenidos correctamente");
    });
    
    test('rechaza correctamente la promesa', () => {
        return expect(obtenerDatos(false)).rejects.toBe("Error al obtener los datos");
    });
});