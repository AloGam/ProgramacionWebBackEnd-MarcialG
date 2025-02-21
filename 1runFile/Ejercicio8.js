/*8. Agrega un método al objeto creado anteriormente 
e imprima una descripción del mismo*/

//objeto creado en el ejercicio7
let coche = {
    marca: "Toyota",
    modelo: "Supra",
    año: 2025,
    color: "Rojo"
};

coche.descripcion = function() {
    return `Este es un ${this.marca} ${this.modelo} ${this.color} del año ${this.año}.`;
};

console.log(coche.descripcion());