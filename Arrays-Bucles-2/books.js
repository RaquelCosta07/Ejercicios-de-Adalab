"use strict"

/*
    - push --> añade elemento al final del array
    - concat --> suma arrays. Crea un nuevo array a partir de otros arrays
    - splice --> agrega, elimina o reemplaza elementos en un array
    - slice --> extrae posiciones de un array y me genera uno nuevo
    - indexOf --> me devuelve la posicion de un elemento en un array. devuelve un numero

*/

const library = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { title: 'La casa de los espíritus', author: 'Isabel Allende', year: 1982 }
];

// Traen u nuevo libro al catalogo, lo tengo que anadir a mi lista de libros

const book = {
    title: "Nada",
    author: "Carmen Laforet",
    year: 1945
};

library.push(book);

console.log(library);

// Crear un nuevo libro al catalogo, lo tengo que añadir a mi lista de libros

