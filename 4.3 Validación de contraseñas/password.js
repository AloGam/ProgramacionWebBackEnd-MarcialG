function validacionPassword(password) {
    // Verifica que la entrada sea una cadena de texto
    if (typeof password !== 'string') return false;
    //Verifica la longitud mínima
    if (password.length < 8) return false;
    // No debe contener espacios
    if (/\s/.test(password)) return false;
    
    // Criterios de seguridad
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*()]/.test(password);
    // Palabras personales
    const palabrasPersonales = ['Tulum', 'Marcial', '2019'];
    // Verifica si la contraseña contiene al menos una mayúscula, una minúscula, un número, un carácter especial y una palabra personal
    const contienePalabraPersonal = palabrasPersonales.some(palabra =>
        password.toLowerCase().includes(palabra.toLowerCase())
    );
    
    return tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial && contienePalabraPersonal;
}

module.exports = validacionPassword;

const passwords = ["Marcial2020!", "marcial2020!", "Marcial!", "Marcial2020", "MARCIAL2020!", "Paco2020!"];
passwords.forEach(contra => {
    console.log(`Password: "${contra}" => ${validacionPassword(contra)}`);
});