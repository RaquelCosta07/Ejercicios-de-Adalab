"use strict";

// Push
// Añade un elemento al final del array
// MOdificar el array orginal

const namesPromoAlaina = ["Silvia", "Carmen", "Belén"];

namesPromoAlaina.push("Ángela");

console.log(namesPromoAlaina);


















// Concat
// Crea un nuevo array a partir de otros arrays
// No modifica los arrays originales

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];



















// Splice
// Modifica el array original
// Eliminar elementoss del array, agregar nuevos elementos al array y remplazar elementos del array







// Slice
// Se utiliza para extraer porciones de un array
// No modifica el array original, sino que me devuelve un array nuevo

/*
- POsicion inicial., Indice donde empieza la extraccion
- Posicion final (no incluida). Índice donde termina la extraccion
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Crear un nuevo aray con los 5 primeros numeros

const firstFiveNumbers = numbers.slice(0, 5);

console.log(firstFiveNumbers); 





// indexOf
// BUscar un elemento dentro de un array y devlver la posicion de ese elemento
// Si encuentra el elemento, me devuelve la posicion
// Si no encuentra el elemento, me devuelve -1 
// No funciona con arrays de objectos 

const superHeroes = [
    "Superman",
    "WonderWoman",
    "Batman",
    "Spiderman"
]; 

// Saber si Batman existe y en que posicion está

const indexOfBatman = superHeroes.indexOf("Batman"); //2

