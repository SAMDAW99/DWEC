/**
Enunciado:

Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
hasta introducir un número negativo y entonces mostrar el resultado.
**/
{
let producto = 1;
let contador = 0;
let media = 0;
let suma = 0;

while (true) {
    const num=Number(prompt("Introduce un número: "));
    if (num<0) {
        break; 
    }
    else {
        contador ++
        if (contador>0) {
        suma += num;
        media =(suma/contador);
        producto *= num;
    }}
}
alert(`la suma es ${suma}, la media es ${media}, el producto es ${producto} `);
}