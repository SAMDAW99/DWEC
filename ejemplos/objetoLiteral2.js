"use strict"
{
    /**let persona = {
        nombre: "pepe",
        edad:30,
        ciudad: "Sevilla"
    };
    console.log (persona);
    console.log(persona.edad);
    console.log(persona.nombre);
    console.log(persona.ciudad);

    console.log ("\n Le cambio la edad")
    persona.edad=45;
    console.log(persona.edad)
    console.log ("\n Le cambio la ciudad")
    persona["ciudad"]="salamanca"
    console.log(""+persona["ciudad"])
    let animal = {
        tipo:"gato",
        patas: 4,
        ancho: 30,
    }
console.log(animal);
console.log(`Ancho: ${animal.dimensiones.ancho}`);
*/
let personaCompleta = {
    nombre:"Juan",
    edad: 24,
    ciudad: "Cordoba",
    pasatiempos: ["fiesta"," bici", "guitarra"],
    contactos:{
        instagram:"jdcvg",
        movil:"641032164",
    },
    saludar () {
        console.log("Holaa");
    }}
const {nombre, saludar}=personaCompleta;
console.log("El nombre:"+nombre);
saludar();
}    

console.log("destructing an array");
const miCoche = ["Alfa Romeo", "159", "azul"];
const [marca, modelo, color]=miCoche;
console.log(`me gusta el ${marca} modelo ${modelo} de color ${color}.`);

const producto ={
    nombre : "reloj",
    tipo : "bolsillo",
    tamaño: "grande",
};
const colores ={
    esfera: "blanco",
    correa: "negro"
};

const productoCompleto ={...producto, ...colores};
