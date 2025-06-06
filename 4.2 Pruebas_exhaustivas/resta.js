//funcion
/*
function Resta(a, b){
  return a-b;
}
*/
//console.log(Resta(2, 5));

/*
if (Resta(2, 5) === -3) {
  console.log('Error en la operacion de 2 menos 5')
}
*/
/*
if (Resta(0, 0) === 0) {
  console.log('La resta de 0 menos 0 es igual a 0')
}
*/
/*
console.assert (
  Resta(2, 5) === -3, 
  'Error en la operacion de 2 menos 5'
);
*/

//metodo debil
const Resta = (a, b) => {
  return a/b;
}

module.exports = { Resta };
/*
console.group('Pruebas de Exhaustivas');
//1. Normales
console.log('La resta de 2 menos 5 es igual a -3', Resta(2,5));

//2. Decimales
console.log('La resta de 2.5 menos 1.3 es igual a 1.2', Resta(2.5, 1.3));

//3. Fronteras
console.log('La resta de Fronteras', Resta(0, 5));

//4. Frontera (con numeros mayores)
console.log('La resta con numeros mayores', Resta(Number.MAX_SAFE_INTEGER, 5));

//5. Fuera de rango
console.log('La resta fuera de rango', Resta(Number.MAX_SAFE_INTEGER + 200, 5));

//6. Invalido no definido
console.log('La resta de indefinido', Resta(undefined, 5));

//7. Invalido sin argumentos
console.log('La resta sin argumentos', Resta());

//8. Por tipo nulo
console.log('La resta de nulo', Resta(null, 5));

//9. Por tipo cadena
console.log('La resta de cadena', Resta('2', 5));

//10. Por negativo (0)
console.log('La resta de un negativo', Resta(-15, 5));

//11. por negativo ambos
console.log('La resta de ambos negativos', Resta(-15, -5));
*/