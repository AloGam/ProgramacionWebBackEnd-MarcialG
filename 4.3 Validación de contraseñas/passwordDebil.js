function validacionPassword(password) {
    // Verifica que la entrada sea una cadena de texto
    if (typeof password !== 'string') return false;
    //Verifica la longitud mínima
    if (password.length < 8) return false;
    // No debe contener espacios
    if (/\s/.test(password)) return false;

    return true;
}

module.exports = validacionPassword;