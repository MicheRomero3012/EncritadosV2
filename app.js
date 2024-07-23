/**
 * challenge de encriptador de texto para el curso de Alura 
 * 19 de julio de 2024
 * @Autor Romero Flores Brian Michelle.
 */

//funcion para obtener el texto ingresado
function obtenerMensaje() {
    let entradaTexto = document.getElementById('texto').value;
    return entradaTexto;
}
//funcion que valida la entrada de caracteres en minusculas mediante expresiones regulares
function validacionMinusculas(mensaje) {
    let regex = /^[a-z ]+$/;
    return regex.test(mensaje);
}
//funcion para controlar el mensaje de error en caso de no cumplir con la expresión regular
function mensajeError(mensaje) {
    if (!validacionMinusculas(mensaje)) {
        document.getElementById('mensajeFinal').innerText = "Solo se permiten letras minúsculas y sin acentos, por favor ingrese otro mensaje.";
        document.getElementById('copiar').disabled = true; // deshabilita el botón copiar
        return true;
    }
    document.getElementById('copiar').disabled = false; // habilita el botón copiar si no hay error
    return false;
}
//funcion que realiza la encriptacion 
function encriptarMensaje() {
    let mensaje = obtenerMensaje();
    //manejo de error
    if (mensajeError(mensaje)) {
        return;
    }
    //reglas para cambio en las vocales
    let reglas = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };
    let mensajeEncriptado = "";

    for (let letra of mensaje) {
        mensajeEncriptado += reglas[letra] || letra;
    }
    document.getElementById('mensajeFinal').innerText = mensajeEncriptado;
}

//funcion para desencriptar
function desencriptarMensaje() {
    let mensaje = obtenerMensaje();
    //manejo de errores
    if (mensajeError(mensaje)) {
        return;
    }
    //reglas para cambio en las vocales
    let reglas = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };
    let mensajeDesencriptado = mensaje;

    for (let clave in reglas) {
        let valor = reglas[clave];
        mensajeDesencriptado = mensajeDesencriptado.split(clave).join(valor);
    }
    document.getElementById('mensajeFinal').innerText = mensajeDesencriptado;
}
//funcion para ocultar las secciones autoamticamente
document.addEventListener('DOMContentLoaded', function() {
    let seccionSinTexto = document.querySelector('.seccion__sin__texto');
    let seccionConTexto = document.querySelector('.seccion__con__texto');
    let botonEncriptar = document.getElementById('encriptar');
    let botonDesencriptar = document.getElementById('desencriptar');

    botonEncriptar.addEventListener('click', function() {
        seccionSinTexto.style.display = 'none';
        seccionConTexto.style.display = 'block';
    });

    botonDesencriptar.addEventListener('click', function() {
        seccionSinTexto.style.display = 'none';
        seccionConTexto.style.display = 'block';
    });
});

//función para copiar el mensaje remplazando la etiqueta <p> por un textarea temporal.
function copiar() {
    let texto = document.getElementById('mensajeFinal').innerText;
    let textarea = document.createElement('textarea');

    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Texto copiado al portapapeles');
}

//funcion para limpiar el cuadro de texto con un clic
function limpiar() {
    let textarea = document.getElementById('texto');
    textarea.value = '';
}

// Asignar eventos a los botones de accion 
document.getElementById('encriptar').addEventListener('click', encriptarMensaje);
document.getElementById('desencriptar').addEventListener('click', desencriptarMensaje);

