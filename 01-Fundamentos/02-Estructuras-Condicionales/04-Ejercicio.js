/**
 * Ejercicio 04 — Sistema de acceso

Declara estas variables:
const usuarioActivo = true;
const tienePermiso = false;

El usuario solo puede acceder si está activo y tiene permiso. Muestra "Acceso permitido" o "Acceso denegado".
*/
const usuarioActivo = true;
const tienePermiso = false;

const acceso = (usuarioActivo && tienePermiso) ? "Acceso Permitido" : "Acceso denegado";

console.log(acceso)