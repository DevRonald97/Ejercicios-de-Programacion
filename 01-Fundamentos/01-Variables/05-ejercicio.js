/**
 * Ejercicio 5. Sistema de productos

Imagina que estás desarrollando el backend de una tienda.

Declara:
const productName = "Laptop";
const price = 850;
const quantity = 3;

Calcula:
- Precio total.
- Precio con un descuento del 10%.
- Precio final por unidad después del descuento.
 */

const productName = "Laptop";
const price = 850;
const quantity = 3;

const precioTotal = price * quantity
const descuentoProducto = precioTotal * 10/100
const total = precioTotal - descuentoProducto
const precioFinal = total / quantity

console.log(`Precio Total: ${precioTotal} con un descuento del 10%: ${total}, el precio final con descuento por unidad seria: ${precioFinal}`)