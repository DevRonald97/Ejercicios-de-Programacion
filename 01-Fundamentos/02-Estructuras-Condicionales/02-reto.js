/**
 * Sistema de autenticación
 * Crea un pequeño sistema de inicio de sesión con estas variables:
 * 
const usuarioRegistrado = "ronald";
const passwordRegistrado = "javascript123";

const usuarioIngresado = "ronald";
const passwordIngresado = "javascript123";
const cuentaBloqueada = false;

Tu programa debe cumplir estas reglas:
1. Si la cuenta está bloqueada, mostrar "Cuenta bloqueada".
2. Si el usuario o contraseña son incorrectos, mostrar "Credenciales incorrectas".
3. Si ambos son correctos y la cuenta no está bloqueada, mostrar "Inicio de sesión exitoso".
Importante: respeta el orden de evaluación. Una cuenta bloqueada no debe permitir el acceso aunque las credenciales sean correctas.
*/

const usuarioRegistrado = "ronald";
const passwordRegistrado = "javascript123";

const usuarioIngresado = "ronald";
const passwordIngresado = "javascript123";
const cuentaBloqueada = true;

if(cuentaBloqueada){
    console.log("Cuenta Bloqueada")
}else if(usuarioIngresado !== usuarioRegistrado || passwordIngresado !== passwordRegistrado ){
    console.log("Credenciales incorrectas")
}else {
    console.log("Inicio de sesión exitoso")
}