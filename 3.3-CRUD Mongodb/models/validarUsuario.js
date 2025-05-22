   export function validarUsuario(data) {
     const errores = [];

     if (!data.nombre || typeof data.nombre !== 'string') {
       errores.push('Favor de ingresar el nombre válido');
     }
     
     // Convertir la edad a número
     const edad = Number(data.edad);
     if (isNaN(edad) || edad <= 0) {// isNaN verifica si no es un número
      errores.push('Favor de ingresar la edad válida');
    }

     if (!data.correo || typeof data.correo !== 'string') {
       errores.push('Favor de ingresar el correo válido');
     }

     return errores;
   }
   