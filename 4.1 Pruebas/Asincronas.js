function obtenerDatos(valor) {
  return new Promise((resolve, reject) => {
    if (valor) {
      resolve("Datos obtenidos correctamente");
    } else {
      reject("Error al obtener los datos");
    }
  });
}

module.exports = obtenerDatos;