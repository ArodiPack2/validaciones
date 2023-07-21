//1 Validar Nombre.
/**
 * Verificar que es un string.
 * Verificar que todo lo que está en el string sea solo letras.
 */

/**
 * Función para validar un texto y que no sea vacio.
 * @param {string} nombre
 * @returns {boolean} bolean true or false
 */
function validarNombre(nombre) {
    const name = nombre.trim();
    //console.log("sin limpiar: ", nombre, " y limpio: ", name)
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    //if(!pattern.test(input.value))
    if (typeof name !== 'string' || name === "" || !pattern.test(name)) {
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}

console.log(validarNombre("Fabian Manuel"))
console.log(validarNombre("             "))
console.log(validarNombre("Fabian69 Manuel"))

//2 Validar Email.
/**
 * Localizar que el @ esté bien colocada.
 * Que termine en . y la extención del servidor.
 * ¿Restringir los servidores de email o verificar el correo por otro lado?
 */

/**
 * Función para validar un texto y que no sea vacio.
 * @param {string} email
 * @returns {boolean} bolean true or false
 */
function validarEmail(email) {
    const correo = email.trim();
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //console.log("sin limpiar: ", email, " y limpio: ", correo)
    if (typeof correo !== 'string' || correo === "" || !pattern.test(correo)) {
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}

console.log(validarEmail("arodifuentes10@gmail.com"))
console.log(validarEmail("                       "))
console.log(validarEmail("arodifuentes10gmail.com"))

//3 Validar URL.
/** 
 * 
 */

function validarUrl(url) {
    const urlR = url.trim();
    const pattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    //console.log("sin limpiar: ", url, " y limpio: ", urlR)
    if (typeof urlR !== 'string' || urlR === "" || !pattern.test(urlR)) {
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}

console.log(validarUrl("https://developer.mozilla.org/es/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL"))
console.log(validarUrl("https://developer.mozilla.org/es/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL.com"))
console.log(validarUrl("https://developer.mozilla.org/es/docs/Learn/Common_qu estions/Web_mechanics/What_is_a_URL."))
console.log(validarUrl("https://developer.mozilla.org/es/docs/Learn/Common_qu estions/Web_mechanics/What_is_a_URL    oy"))

//4 Validar Fecha.
/**
 * 
 */

function validarFecha(fecha) {
    const date = fecha.trim();
    const pattern = /^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
    //console.log("sin limpiar: ", fecha, " y limpio: ", date)
    if (typeof date !== 'string' || date === "" || !pattern.test(date)) {
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}

console.log(validarFecha("2023-07-20"))
console.log(validarFecha("20-07-2023"))
console.log(validarFecha("20/junio/2023"))
console.log(validarFecha("2023/07 /20"))

function mirarTiempo() {
    console.log(document.querySelector("[type=time]").value);
}

//5 Validar Tiempo.
/**
 *
 */

function validarTiempo(tiempo) {
    const time = tiempo.trim();
    const pattern = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;
    //console.log("sin limpiar: ", tiempo, " y limpio: ", time)
    if (typeof time !== 'string' || time === "" || !pattern.test(time)) {
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}

console.log(validarTiempo("20:22"))

//6 Validar Fecha y hora de nacimiento.
/**
 *
 */

//7 Validar Mes.
/**
 *
 */

//8 Validar Semana.
/**
 *
 */

//9 Validar un Número.
/**
 *
 */

//10 Validar un Número entre los limites puestos.
/**
 *
 */

//11 Validar Teléfono.
/**
 * Verificar que lo introducido sean números.
 * Limitar la entrada de números a 9.
 */

//12 Validar Término de búsqueda.
/**
 *
 */

//13 Validar Color.
/**
 * 
 */