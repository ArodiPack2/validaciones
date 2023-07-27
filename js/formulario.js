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
        console.log("entro en el email")
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
        console.log("entro en el url")
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
        console.log("entro en la fecha")
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
        console.log("entro en el tiempo")
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

function validarNacimiento(nacimiento) {
    const nacer = nacimiento.trim();
    const pattern = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})(\s)([0-1][1-9]|[2][0-3])(:)([0-5][0-9])$/;
    //console.log("sin limpiar: ", nacimiento, " y limpio: ", nacer)
    if (typeof nacer !== 'string' || nacer === "" || !pattern.test(nacer)) {
        console.log("entro en el nacimiento")
        return false
    } else {
        return true
    }
}

console.log(validarNacimiento("28-02-2002 17:04"))
console.log(validarNacimiento("28-febrero-2002 17:04"))
console.log(validarNacimiento("28-02-20 02 17:04"))

//7 Validar Mes.
/**
 *
 */

function validarMes(mes) {
    const meses = mes.trim();
    const pattern = /(\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\D?(\d{1,2}(st|nd|rd|th)?)?(([,.\-\/])\D?)?((19[7-9]\d|20\d{2})|\d{2})*/;
    //console.log("sin limpiar: ", mes, " y limpio: ", meses)
    if (typeof meses !== 'string' || meses === "" || !pattern.test(meses)) {
        console.log("entro en el mes")
        return false
    } else {
        return true
    }
}

console.log(validarMes("Febrero de 2023"))
console.log(validarMes("2023 de agosto"))
console.log(validarMes("2023-03-28"))


//8 Validar Semana.
/**
 *
 */

function validarSemana(semana){
    const semanas = semana.trim();
    const pattern = /^(?<week>(\d{2}))(?<year>(\d{2}){0,2}[-\/]?)/;
    //console.log("sin limpiar: ", semana, " y limpio: ", semanas)
    if (typeof semanas !== 'string' || semanas === "" || !pattern.test(semanas)) {
        console.log("entro en la semana")
        return false
    } else {
        return true
    }
}


console.log(validarSemana("23-2022"))
console.log(validarSemana("23, 2022"))
console.log(validarSemana("Semana 23-2023"))

//9 Validar un Número en un intervalo min -10 y max 10.
/**
 *
 */

function validarIntervalo(intervalo){
    const distancia = intervalo.trim();
    //console.log("sin limpiar: ", intervalo, " y limpio: ", distancia)
    if (typeof distancia !== 'string' || distancia > 10 || distancia <-10) {
        console.log("entro en la semana")
        return false
    } else {
        return true
    }
}

console.log(validarIntervalo("10"))
console.log(validarIntervalo("-10"))
console.log(validarIntervalo("-11"))
console.log(validarIntervalo("11"))
console.log(validarIntervalo("9"))

//10 Validar un Número entre los limites puestos.
/**
 *
 */

function validarLimite(limite){
    const limit = limite.trim();
    //console.log("sin limpiar: ", limite, " y limpio: ",  limit)
    if (typeof limit !== 'string' ||  limit > 10 ||  limit <= 0) {
        console.log("entro en la el intervalo")
        return false
    } else {
        return true
    }
}
console.log(validarLimite("10"))
console.log(validarLimite("-1"))
console.log(validarLimite("9"))
console.log(validarLimite("5"))
console.log(validarLimite("14"))

//11 Validar Teléfono.
/**
 * Verificar que lo introducido sean números.
 * Limitar la entrada de números a 9.
 */

function validarTelefono(telefono){
    const telefonos = telefono.trim();
    const pattern = /(6|7)[ -]*([0-9][ -]*){8}/
    if (telefonos.length < 9 || telefonos.length > 12) {
        console.log("El número de teléfono debe tener entre 9 y 12 caracteres");
        return false;
    }
    if (typeof telefonos !== 'string' || telefonos === "" || !pattern.test(telefonos)) {
        console.log("entro en la semana")
        return false
    } else {
        return true
    }
}
console.log(validarTelefono("661-18-69-18"))
console.log(validarTelefono("661186918"))
console.log(validarTelefono("6611869181818"))
console.log(validarTelefono("5"))
console.log(validarTelefono("14"))

//12 Validar Término de búsqueda.
/**
 *
 */

function validarBusqueda(busqueda){
    const busquedas = busqueda.trim();
    const pattern = /^[A-Za-z0-9\s]+$/;
    //console.log("sin limpiar: ", busqueda, " y limpio: ", busquedas)
    if (typeof busquedas !== 'string' || busquedas === "" || !pattern.test(busquedas)) {
        console.log("entro en la semana")
        return false
    } else {
        return true
    }
}

console.log(validarBusqueda("Algo de 23"))

//13 Validar Color.
/**
 * 
 */ 

function validarColor(color){
    const colores = color.trim();
    const pattern = /(#?\w{6})|(rgb\s?\(\s?(\d{1,3},\s?){2}\d{1,3}\s?\))/;
    //console.log("sin limpiar: ", color, " y limpio: ", colores)
    if (typeof colores !== 'string' || colores === "" || !pattern.test(colores)) {
        console.log("entro en la semana")
        return false
    } else {
        return true
    }
}

console.log(validarColor("Azul"))
console.log(validarColor("#952323"))