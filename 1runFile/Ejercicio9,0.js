/*9. Crea un módulo que contenga funciones matemáticas
 básicas y utilízalo en otro archivo */


function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

module.exports = { suma, resta };