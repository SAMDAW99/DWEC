/**
 * Enunciado:
 * Mostrar la tabla de multiplicar de un número introducido por pantalla.
 * */
let tabla=[];
num=Number(prompt("Introduce Un número: "));
for (let i = 0; i <= 9 ; i++) {
    var resultado= num*i;
    var cadena=` ${num} x ${i} = ${resultado}`;
    tabla.push(cadena);
}
console.log(`la tabla de multiplicar del numero ${num} es: [${tabla}] `);
