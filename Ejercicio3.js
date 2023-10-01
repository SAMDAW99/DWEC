var ahora= new Date();
var horas= ahora.getHours();
var minutos= ahora.getMinutes();
var segundos= ahora.getSeconds();
console.log ("la hora actual es "+ horas + ":" + minutos + ":" + segundos);
if (segundos!=59)  {
    console.log ("la hora actual adelantada por un segundo es "+ horas + ":" + minutos + ":"+ (segundos+1));
}
else if (minutos!=59){
    console.log ("la hora actual adelantada por un segundo es "+ horas + ":" + (minutos+1) + ":"+ "00");
}
else if (horas!=23) {
    console.log("la hora actual adelantada por un segundo es "+ (horas+1)+":"+"00"+":"+"00");
}