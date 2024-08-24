/* Elementos html */
const contenidoEncriptador = document.getElementById('textoEncriptador');
const contenidoImagenNoEncontrado = document.getElementById('imagen__no__encontrado');
const contenidoMensajeNoEncontrado = document.getElementById('mensaje__no__encontrado');
const contenidoMensajeInstrucciones = document.getElementById('mensaje__instrucciones');
const contenidoResultado = document.getElementById('resultado');
const contenidoBotonCopiar = document.getElementById('boton__copiar');

/* Variables */
let textoEncriptado;
let textoDesencriptado;


/* Llaves de encriptación
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
const llave_e = "enter";
const llave_i = "imes";
const llave_a = "ai";
const llave_o = "ober";
const llave_u = "ufat";

function encriptarTexto() {
    textoDesencriptado = contenidoEncriptador.value;
    
    // Visibilizar resultado y boton de copiar
    contenidoResultado.style.display = "inline";
    contenidoBotonCopiar.style.display = "inline";

    // Invisibilizar mensajes no encontrado y de instrucciones
    contenidoImagenNoEncontrado.style.display = "none";
    contenidoMensajeNoEncontrado.style.display = "none";
    contenidoMensajeInstrucciones.style.display = "none";

    // Procedimiento encriptar
    textoEncriptado = "";
    let letra_encriptada;
    for (const letra of textoDesencriptado) {
        letra_encriptada = letra;
        if(letra=="a"){
            letra_encriptada = llave_a;
        } else if(letra_encriptada=="e"){
            letra_encriptada = llave_e;
        } else if(letra_encriptada=="i"){
            letra_encriptada = llave_i;
        } else if(letra_encriptada=="o"){
            letra_encriptada =llave_o;
        } else if(letra_encriptada=="u"){
            letra_encriptada = llave_u;
        }
        textoEncriptado += letra_encriptada;
    }

    contenidoResultado.innerHTML = textoEncriptado;
}

function desencriptarTexto() {
    textoEncriptado = contenidoEncriptador.value;
    
    //Procedimiento desencriptar
    textoDesencriptado = textoEncriptado;
    textoDesencriptado = textoDesencriptado.replaceAll(llave_a,"a");
    textoDesencriptado = textoDesencriptado.replaceAll(llave_e,"e");
    textoDesencriptado = textoDesencriptado.replaceAll(llave_i,"i");
    textoDesencriptado = textoDesencriptado.replaceAll(llave_o,"o");
    textoDesencriptado = textoDesencriptado.replaceAll(llave_u,"u");

    contenidoResultado.innerHTML = textoDesencriptado;
}

function copiarTexto() {
    const texto = contenidoResultado.innerText;
    navigator.clipboard.writeText(texto);
}