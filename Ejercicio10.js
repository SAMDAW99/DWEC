'use strict'
{
    
function numPrimo(num) {
    let lista=[]

    for (i=2; i < num; i++) {
        let mod= num%i;
        lista.push(mod)
    }
    if (lista.includes(0)) {
        alert(`El número ${num} no es primo`)
        }
    else {
        alert (`${num} Es un número Primo `)
        }
}
let num=Number(prompt("Introduce Un número: "));
numPrimo(num);

}