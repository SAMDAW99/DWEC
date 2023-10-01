function numPrimo() {
    let num=Number(prompt("Introduce Un número: "));
    let lista=[]
    for (i=2; i < num; i++) {
        let mod= num%i;
        lista.push(mod)
    }
    if (lista.includes(0)) {
        alert(`El numero ${num} no es primo`)
        }
    else {
        alert (`${num} Es un Numero Primo `)}
    }
numPrimo();