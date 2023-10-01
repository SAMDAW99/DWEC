/**
 * Enunciado:
 * Mostrar todos los números que hay entre dos números introducidos por el usuario.
 */
num1=Number(prompt("Introduce el primer número: "));
num2=Number(prompt("Introduce el segundo número: "));
lista=[];
if (num1<num2){
for (i=num1; i<=num2; i++) {
  lista.push(i);
}}



else if (num1>num2) {
  for (i=num2; i<=num1; i++) {
    lista.push(i);
  }}


else {
  console.log('Los valores son iguales, no hay números entre ambos');
}

console.log('Números impares entre los dos números: ' +  lista.join(', '));
