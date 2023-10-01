/**
 * Enunciado:
 * Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
    aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
    son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.
    * */
    let resultado;
    while (true){
        num1=Number(prompt("Introduce el primer número: "));
        num2=Number(prompt("Introduce el segundo número: "));
        operacion = prompt ("¿Qué operación quieres realizar? ( + , - , x o / )");
        if (!isNaN(num1) && !isNaN(num2) && (operacion=="+"||operacion=="-"||operacion=="x"||(operacion=="/"&& num2!==0))) {
            break;
        }
        else if (!isNaN(num1) && num2===0 && operacion=="/"){
            alert ('No se puede dividir entre 0')
        }
        else {
            alert('Los valores ingresados no son válidos');
        }
    }
    switch (operacion) {
        case "+": 
            {resultado=(num1+num2);break;}
        case "-":
            {resultado=(num1+num2);break;}
        case "x":
            {resultado=(num1*num2);break;}
        case "/":
            
               {resultado=(num1/num2);break;}
        }
        alert(`El resultado es ${resultado}`);
