/**
 * 6. Reto técnico — Pensamiento lógico
Sin copiar soluciones
Una tienda necesita calcular el importe de una compra.

Tiene estos datos:
const productPrice = 45;
const quantity = 4;
const discount = 15;

Tu misión:
1. Calcular el importe sin descuento.
2. Calcular cuánto dinero representa el descuento.
3. Calcular el importe final.
4. Mostrar todos los resultados por consola.
Restricción: utiliza variables, operadores aritméticos y console.log(). Todavía no utilices condicionales ni funciones.
 */

const productPrice = 45;
const quantity = 4;
const discount = 15;

const importe = productPrice * quantity;
const descuentoProducto = importe * discount/100
const totalImporte = importe - descuentoProducto

console.log(`Importe sin descuento: ${importe}`)
console.log(`Cuanto dinero representa el 15% de descuento por la cantidad de productos: ${descuentoProducto}`)
console.log(`El total de la compra es: ${totalImporte}`)