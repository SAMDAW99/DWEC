/**
 * Enunciado:
 * Mostrar todos los números impares que hay entre dos números introducidos por el usuario.
 */
num1=Number(prompt("Introduce el primer número: "));
num2=Number(prompt("Introduce el segundo número: "));
let lista= [];
if (num1%2 == 0) {
    if (num1<num2){
    for (i=num1+1; i<=num2; i+=2) {
      lista.push(i);
    }}
    
    
    
    else if (num1>num2) {
        for (i=num2+1; i<=num1; i+=2) {
            lista.push(i);
        }}
    
    
    else {
      console.log('Los valores son iguales, no hay números entre ambos');
    }}


else {
    if (num1<num2){
        for (i=num1; i<=num2; i+=2) {
          lista.push(i);
        }}
        
        
        
    else if (num1>num2) {
        for (i=num2; i<=num1; i+=2) {
        lista.push(i);
        }}
    
    
    else {
        console.log('Los valores son iguales, no hay números entre ambos');
    }}
console.log('Números impares entre los dos números: ' +  lista.join(', '));

