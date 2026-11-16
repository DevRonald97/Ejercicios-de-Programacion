/**
 * Ejercicio 05 — Descuentos de una tienda
Declara:
const precio = 150;
const cantidad = 2;


Calcula el importe total y aplica estas reglas:
- Si el importe es mayor o igual a 200: 20% de descuento.
- Si es mayor o igual a 100: 10% de descuento.
- Si es menor de 100: no hay descuento.
Muestra el importe original, el descuento y el importe final.
 */

const precio = 150;
const cantidad = 2;

const importeTotal = precio * cantidad;
let porcentajeDescuento = 0;

if(importeTotal >= 200){
    porcentajeDescuento = 20;
}else if(importeTotal >= 100){
    porcentajeDescuento = 10;
}

const descuento = importeTotal * porcentajeDescuento / 100;
const importeFinal = importeTotal - descuento;

console.log(`Importe original: ${importeTotal}`);
console.log(`descuento: ${descuento}`);
console.log(`Importe final: ${importeFinal}`);