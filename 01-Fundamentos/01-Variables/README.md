# Variables y operadores

## 1. Conceptos aprendidos

### 1.1. ¿Qué es una variable?

Una variable es un espacio identificado por un nombre que nos permite almacenar información para utilizarla posteriormente.

### 1.2. Diferencia entre `let` y `const`

- `const`: se utiliza cuando no necesitamos reasignar una variable.
- `let`: se utiliza cuando necesitamos reasignar su valor durante la ejecución.

**Buena práctica:** utilizar `const` por defecto y `let` cuando sea necesario modificar el valor.

### 1.3. Tipos de datos

| Tipo | Ejemplo |
|---|---|
| String | `"Backend"` |
| Number | `1500` |
| Boolean | `true` |
| Undefined | `undefined` |
| Null | `null` |
| BigInt | `123n` |
| Symbol | `Symbol("id")` |

**Observación:** `typeof null` devuelve `"object"` por una particularidad histórica de JavaScript.

### 1.4. Operadores

Los operadores permiten realizar operaciones con nuestros datos.

- Aritméticos: realizan operaciones matemáticas.
- Comparación: comparan valores y devuelven un booleano.
- Lógicos: permiten combinar o invertir condiciones.

## 2. Ejemplos

### 2.1. Variables

```javascript
const nombre = "Ronald";
let saldo = 1500;
let operaciones = 5;
const cuentaActiva = true;
```

**Utilizando const:**

```javascript
const nombre = "Carlos";
const edad = 29;
```

**Utilizando let:**

```javascript
let saldo = 1000;

saldo = 1500;

console.log(saldo); // 1500
```

### 2.2. Tipos de datos

```javascript
const nombre = "Ronald";
const edad = 29;
const programador = true;
let experiencia;
const salario = null;

console.log(typeof nombre);       // string
console.log(typeof edad);         // number
console.log(typeof programador);  // boolean
console.log(typeof experiencia);  // undefined
console.log(typeof salario);      // object
```

### 2.3. Operadores aritméticos

```javascript
const a = 10;
const b = 5;

console.log(a + b);  // 15
console.log(a - b);  // 5
console.log(a * b);  // 50
console.log(a / b);  // 2
console.log(a % b);  // 0
console.log(a ** b); // 100000
```

### 2.4. Operadores de comparación

```javascript
console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 === 10); // true
console.log(10 !== 5);  // true
console.log(10 === "10"); // false
console.log(10 == "10");  // true
```

- `===`: compara valor y tipo sin conversión implícita.
- `==`: permite conversiones de tipos antes de comparar.

**Buena práctica:** utilizar `===` como operador de igualdad por defecto.

### 2.5. Operadores lógicos

```javascript
const edad = 25;
const tieneExperiencia = true;

console.log(edad >= 18 && tieneExperiencia);
console.log(edad >= 18 || tieneExperiencia);
console.log(!tieneExperiencia);
```

- `&&`: ambas condiciones deben cumplirse.
- `||`: al menos una condición debe cumplirse.
- `!`: invierte el valor booleano.

## 3. Problemas encontrados

- Identificar correctamente los nombres de las variables para que representen la operación que realizan.
- Diferenciar los resultados de `typeof null` y `typeof undefined`.
- Comprender las conversiones implícitas que realiza el operador `==`.

## 4. Errores corregidos

- Se corrigió el nombre de la variable `segundoMenor` por `segundoMayor` para representar correctamente la comparación.
- Se identificó que `typeof null` devuelve `"object"`.
- Se mejoró el uso de `const` en variables que no necesitan reasignación.
- Se mejoró la nomenclatura utilizando camelCase.

## 5. Qué aprendí

- Una variable permite almacenar información.
- La diferencia entre `let` y `const`.
- Los principales tipos de datos de JavaScript.
- El operador `%` devuelve el residuo de una división.
- La multiplicación tiene prioridad sobre la suma.
- Los paréntesis permiten controlar el orden de las operaciones.
- `===` compara valor y tipo.
- `==` permite conversiones implícitas.
- Los operadores lógicos permiten combinar condiciones.
- La importancia de utilizar nombres descriptivos para las variables.

## 6. Qué necesito reforzar

- Comprender mejor las conversiones implícitas de JavaScript.
- Profundizar en las diferencias entre `null` y `undefined`.
- Mejorar la nomenclatura de variables.
- Seguir practicando operaciones matemáticas y comparaciones.

## 7. Evidencias y ejercicios

Los ejercicios desarrollados durante este módulo se encuentran en los siguientes archivos:

- `01-ejercicio.js`: declaración de variables.
- `02-ejercicio.js`: tipos de datos.
- `03-ejercicio.js`: operaciones matemáticas.
- `04-ejercicio.js`: comparaciones.
- `05-ejercicio.js`: sistema de productos.
- `01-reto.js`: cálculo de importe y descuento.

**Estado del módulo:** completado.

**Evaluación:** 10/10 en la evaluación independiente.