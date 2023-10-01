/**
 * Enunciado:
 * Mostrar todos los números divisores de un número introducido por el usuario.
 * */
let divisores=[];
num=Number(prompt("Introduce Un número: "));
for (let i = 0; i <= num ; i++) {
    if ((num % i) == 0){
        divisores.push(i);
    }
}
console.log(`Los numeros divisores de ${num} son: ${divisores}`);
