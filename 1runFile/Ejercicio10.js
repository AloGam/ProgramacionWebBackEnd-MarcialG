/*10. Escribe una función que simule una operación asincrónica
 utilizando setTimeout y maneje el resultado con un callback */

 function operacionAsincronica(callback) {
    setTimeout(() => {
        callback("Operacion completada");
    }, 5000);
}

operacionAsincronica((resultado) => {
    console.log(resultado);
});