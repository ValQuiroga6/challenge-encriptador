const input=document.getElementById('input');
const buttonEncriptar=document.getElementById('button-encriptar');
const buttonDesencriptar=document.getElementById('button-desencriptar');
const imagePerson=document.getElementById('img-person');
const title=document.getElementById('title');
const text=document.getElementById('text');
const buttonCopiar=document.getElementById('button-copiar');
const result=document.getElementById('result');

function encriptar(){
    /*Al presionar el boton encriptar debe tomar el texto ingresado y encriptarlo, mostrandolo en la seccion derecha, ocultando la imagen y textos que hay en esa seccion y mostrando el boton de copiar*/
    let textoIngresado= input.value;
    let textoEncriptado= textoIngresado.toLowerCase();
    textoEncriptado=textoEncriptado.replaceAll("e","enter")
    textoEncriptado=textoEncriptado.replaceAll("i","imes")
    textoEncriptado=textoEncriptado.replaceAll("a","ai")
    textoEncriptado=textoEncriptado.replaceAll("o","ober")
    textoEncriptado=textoEncriptado.replaceAll("u","ufat")
    imagePerson.hidden=true;
    title.hidden=true;
    text.hidden=true;
    buttonCopiar.style.display='block';
    result.innerText=textoEncriptado;
    result.hidden=false;
    input.value="";
}

buttonEncriptar.addEventListener('click', encriptar);

function desencriptar(){
    /*Debo tomar el texto encriptado, luego desencriptarlo y este tiene que mostrarse desencriptado*/ 
    let textoIngresado= input.value;
    let textoDesencriptado=textoIngresado.toLowerCase();
    textoDesencriptado=textoDesencriptado.replaceAll("enter","e")
    textoDesencriptado=textoDesencriptado.replaceAll("imes","i")
    textoDesencriptado=textoDesencriptado.replaceAll("ai","a")
    textoDesencriptado=textoDesencriptado.replaceAll("ober","o")
    textoDesencriptado=textoDesencriptado.replaceAll("ufat","u")
    imagePerson.hidden=true;
    title.hidden=true;
    text.hidden=true;
    buttonCopiar.style.display='block';
    result.innerText=textoDesencriptado;
    result.hidden=false;
    input.value="";
}

buttonDesencriptar.addEventListener('click', desencriptar);

function copiar(){
    /*Debe tomar el texto resultante y al presionar el boton se debe copiar en el portapapeles */
    let resultado=result.innerText;
    navigator.clipboard.writeText(resultado);
    input.value="";
}

