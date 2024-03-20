const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");


const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}
function btnDesencriptar(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return(fraseEncriptada);
}

function desencriptar(fraseDesencriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return(fraseDesencriptada);
}
function limpiarCaja(){
    document.querySelector('#texto-encriptado').value = '';
    document.querySelector('#campo-mensaje').value = '';
    document.querySelector('#texto-encriptado').focus();
}
function mensaje(){
    const mensajeCopiado = document.querySelector('#mensaje-copiado');
    mensajeCopiado.textContent = "Texto copiado al portapapeles";
    setTimeout(function() {
        mensajeCopiado.textContent = "";
    }, 1000);
}

function copiar(){
    campo_mensaje.select();
    document.execCommand("copy");    
    limpiarCaja();
    mensaje();
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Encriptador');
}
condicionesIniciales();