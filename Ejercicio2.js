let num1;
let num2;

while (true) {
    num1=Number(prompt("Introduce el primer numero:"));
    num2=Number(prompt("Introduce el segundo numero:"));
    if (!isNaN(num1) && !isNaN(num2) && num1>0 && num2>0) {
        break;
        } else {
            alert ("El valor introducido no es valido");
    }
}

if (num1>num2) {
    alert (num1 + " es mayor que "+ num2);  } 
    else if ((num1<num2)) {
        alert (num1 + " es menor que "+ num2);
    }
    else  { 
        alert ("Los dos son iguales")
}


// hacer con do while y let