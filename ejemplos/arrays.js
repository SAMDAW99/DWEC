"use strict"
{
    //Cómo declarar arrays
    /** */
    let miArray =[];
    miArray[0]=10;
    miArray[1]=20;
    miArray[2]="Martines montañez"
    let miArray2=  new Array();
    miArray2[0]=30;
    miArray2[1]=40;
    let miArray3=["gamusino", "up", "globo"];
    let miArray4=[...miArray, ...miArray2,...miArray3];
    // console.log(miArray4);
    // console.log("\nJOIN");
    const elementos = ["b", "d", "c"];
    let s = elementos.join("-.-");
    // console.log(s);

    
    const sCadena = "1 2 3 4 5 6";
    const array= sCadena.split(" ");
    // console.log(array);
    elementos.push("a");
    // console.log(elementos);
    let lista=[];
    let ultimoElemento;
    for (let i=elementos.length;i>0; i--){
        ultimoElemento = elementos.pop()
        lista.push(ultimoElemento)
        
    }
    // console.log(lista)
    // console.log(lista.shift())
    // console.log(lista.reverse())
    // console.log(lista)
    // console.log(lista.reverse())
    // console.log(lista.sort());
    // console.log(lista);

    // console.log(lista.sort((a,b) => a-b));
    // console.log(lista.slice(1,3));
    const usuarios =[
        {nombre: "Juan", edad: 34},
        {nombre: "Antonia", edad: 24},
        {nombre: "Alba", edad: 10},
    ];
} 

