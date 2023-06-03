const botonEncriptar = document.querySelector(".btn_encriptar");
const botonDesencriptar = document.querySelector(".btn_desencriptar");
const imagenLupa = document.querySelector(".contenedor_imagen_lupa");
const contenedor = document.querySelector(".contenedor_parrafo");
const resultado = document.querySelector(".texto_resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar (){
    ocultarAdelante();
    textarea = recuperarTexto();
    resultado.textContent = encriptarTexto(textarea);
}

function desencriptar (){
    let textarea = recuperarTexto();
    resultado.textContent = desencriptarTexto(textarea);
}

function recuperarTexto (){
    let textarea = document.querySelector(".textarea");
    return textarea.value
}

function ocultarAdelante(){
    imagenLupa.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    let texto = mensaje.split('');
    let textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal; 
    
   
}

function desencriptarTexto (mensaje){
    let texto = mensaje.split('');
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn_copiar");
btnCopiar.addEventListener("click", copiar = () =>{
    let contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
})