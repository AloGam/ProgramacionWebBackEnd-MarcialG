/*11. Escribe un bloque de código que intente convertir una cadena
 a un número y que maneje cualquier error que pueda ocurrir */

let cadena = "123456"; // Cadena que no se puede convertir a número

try {
    let numeroConvertido = Number(cadena);
    if (isNaN(numeroConvertido)) {
        throw new Error("No se pudo convertir la cadena a número");
    }
    console.log(numeroConvertido);
} catch (error) {
    console.error("Error:", error.message);
}