# Estructuras condicionales en JavaScript

## Objetivo

Aprender a controlar el flujo de ejecución de un programa mediante condiciones, utilizando estructuras condicionales y operadores lógicos.

## Conceptos aprendidos

### 1. Estructuras condicionales

- `if`: ejecuta un bloque de código cuando una condición es verdadera.
- `else if`: permite evaluar condiciones adicionales.
- `else`: ejecuta un bloque cuando ninguna de las condiciones anteriores se cumple.

### 2. Operadores de comparación

| Operador | Descripción | Ejemplo |
|---|---|---|
| `===` | Igualdad estricta | `5 === 5` |
| `!==` | Desigualdad estricta | `5 !== 3` |
| `>` | Mayor que | `10 > 5` |
| `<` | Menor que | `3 < 8` |
| `>=` | Mayor o igual | `10 >= 10` |
| `<=` | Menor o igual | `5 <= 8` |

### 3. Operadores lógicos

| Operador | Descripción | Ejemplo |
|---|---|---|
| `&&` | AND: todas las condiciones deben cumplirse | `edad >= 18 && tienePermiso` |
| `||` | OR: al menos una condición debe cumplirse | `usuarioIncorrecto || passwordIncorrecto` |
| `!` | NOT: invierte el valor booleano | `!cuentaBloqueada` |

### 4. Operador ternario

Permite evaluar una condición y devolver uno de dos resultados.

```javascript
const edad = 20;

const mensaje = edad >= 18
    ? "Mayor de edad"
    : "Menor de edad";

console.log(mensaje);
```

## Ejercicios realizados

| Archivo | Ejercicio | Conceptos aplicados |
|---|---|---|
| `01-ejercicio.js` | Mayor o menor de edad | Operador ternario |
| `02-ejercicio.js` | Número positivo, negativo o cero | if / else if / else |
| `03-ejercicio.js` | Sistema de calificaciones | Condiciones múltiples y validaciones |
| `04-ejercicio.js` | Sistema de acceso | Operador lógico AND |
| `05-ejercicio.js` | Descuentos de una tienda | Condiciones, porcentajes y cálculos |
| `06-reto.js` | Sistema de autenticación | Condiciones compuestas y operadores lógicos |

## Problemas y aprendizajes

Durante los ejercicios identifiqué y corregí los siguientes aspectos:

- El orden de las condiciones importa cuando existen rangos que se solapan.
- Las condiciones más restrictivas deben evaluarse antes que las más generales.
- El operador `&&` exige que todas las condiciones sean verdaderas.
- El operador `||` permite que una condición verdadera sea suficiente.
- Una cadena `if / else if / else` deja de evaluar las alternativas cuando encuentra una condición verdadera.
- Es importante evitar condiciones redundantes y mantener una lógica clara.
- En un sistema de autenticación, primero se debe comprobar si la cuenta está bloqueada y después validar las credenciales.

## Errores corregidos

1. Se corrigió el orden de los descuentos para aplicar primero el 20% a compras iguales o superiores a 200.
2. Se reorganizó la lógica del sistema de autenticación para comprobar primero el estado de bloqueo de la cuenta.
3. Se eliminaron condiciones redundantes.
4. Se mejoró la separación entre la selección del porcentaje de descuento y el cálculo del importe final.

## ¿Qué aprendí?

Comprendí cómo controlar el flujo de ejecución de un programa mediante condiciones. También aprendí a combinar operadores lógicos, validar diferentes escenarios y organizar las condiciones para evitar errores de lógica.

## Estructura del módulo

```text
02-Estructuras-Condicionales/
├── 01-ejercicio.js
├── 02-ejercicio.js
├── 03-ejercicio.js
├── 04-ejercicio.js
├── 05-ejercicio.js
├── 06-reto.js
└── README.md
```

## Estado del módulo

- [x] Teoría de estructuras condicionales.
- [x] Ejercicios prácticos.
- [x] Reto de autenticación.
- [x] Corrección de errores de lógica.
- [x] Revisión de código.

**Estado: Completado.**</Writing