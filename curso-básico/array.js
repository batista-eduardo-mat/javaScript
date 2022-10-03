// Arreglos

const frutas = ['Peras','Manzanas',{codigo: 55530, calle:'Quebrada', numero: 22}];
console.log(frutas[0]);
console.log(frutas[2].numero);

// Objetos
const objetos = {
    nombre: 'Eduardo',
    edad: 27,
    arreglo: ['1',2,'3',4,true]
}
// Accedemos al elemento del objeto con su nombre
console.log(objetos.nombre);
// Podemos acceder al elemento del objeto tipo arreglo utilizando corchetes y el nombre de la variable
console.log(objetos['nombre'])

//Podemos acceder a todos sus elemento almacenando sus valores en un arreglo
const arrayObject = Object.values(objetos);
console.log(arrayObject[0])