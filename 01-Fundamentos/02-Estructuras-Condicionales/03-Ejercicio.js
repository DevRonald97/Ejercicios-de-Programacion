/**
 * Ejercicio 03 — Calificaciones

Declara una variable nota de 0 a 20.
- 18 a 20: "Excelente".
- 14 a 17: "Muy bueno".
- 11 a 13: "Aprobado".
- 0 a 10: "Desaprobado".
- Fuera del rango: "Nota inválida".
 */

//Calculo 20 - 0 + 1 = 21 
let nota = Math.floor(Math.random() * 21); //Genera numero aleatorio
//nota = -10 o 20 -> se realizo prueba para fuera de rango 
if( nota >= 0 && nota < 11 ){
    console.log("Desaprobado " + nota)
}else if(nota > 10 && nota < 14){
    console.log("Aprobado" + nota)
}else if(nota > 13 && nota < 18){
    console.log("Muy Bueno" + nota)
}else if(nota > 17 && nota < 21){
    console.log("Excelente" + nota)
}else {
    console.log("Fuera del rango: Nota inválida")
}
