"use strict" 
{
    /**
     * Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
    miFuncion(0,"C") devolverá 32°F

     */
    let opcion;
    let grados;
    

    function calcular() {

        grados=parseFloat(prompt("Introduce los grados"))

        if (opcion==1){
            alert(`${grados} en fahrenheit son ${grados+32}`)
        }
        else if (opcion==2) {
            alert(`${grados} en Celsius son ${grados-32}`)
        }
    }


    do {   
        
        opcion=Number(prompt("Indica tu unidad principal \n 1. Celsius \n 2.Fahrenheit \n 0.Salir"));
        
        if  (opcion==1 || opcion==2 ) {
            calcular(); 
            break;
        }
        else if (opcion==0) {
            break;
        }
        else {
            alert("Opcion incorrecta")
        }
           
    }   while (opcion==0);
    
    
}