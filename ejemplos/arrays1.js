'use strict'
{

let miArray=[
    {nombre:'Juan', apellidos: 'Gracia', edad:25},
    {nombre:'Maria', apellidos:'Dominguez', edad: 20},
    {nombre: "Josefa", apellidos:'Gonzales', edad: 24}
];


console.log(miArray.filter((persona)=> RegExp(/^j/i).test(persona.nombre)));
console.log(miArray.find(elem => elem.edad==20));

let existe = console.log(miArray.some(elem => elem.edad==10));
existe?console.log("lo he encontrado"): console.log("No lo he encontrado");

let posicion = miArray.findIndex(elem => elem.edad ==20);
console.log("encontrado en posición " + posicion);
const elementos = [1,2,3,4,5];
console.log(elementos.reduce((acumulador, valorActual)=>acumulador+=valorActual));

}





