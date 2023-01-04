
function encriptar() {
    //tolowerCasease: cambia el texto de mayusculas a minusculas
    //Se crea una variable llamada texto y le decimos que seleccione lo que esta en 
    //el textbox1 y si hay letras mayusculas que las convierta a minusculas 
    var texto =document.getElementById("textbox1").value.toLowerCase();
    var textoEncriptar = texto.replace(/a/igm,"ai");
    var textoEncriptar = textoEncriptar.replace(/e/igm,"enter");
    var textoEncriptar = textoEncriptar.replace(/i/igm,"imes");
    var textoEncriptar = textoEncriptar.replace(/o/igm,"ober");
    var textoEncriptar = textoEncriptar.replace(/u/igm,"ufat");


    //document.getElementById("logo").style.display="none";
    //document.getElementById("textbox1").style.display = "none";
    document.getElementById("textbox2").value = textoEncriptar;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}

function desencriptar() {

    var texto =document.getElementById("textbox1").value.toLowerCase();
    var textoEncriptar = texto.replace(/ai/ig,"a");
    var textoEncriptar = textoEncriptar.replace(/enter/igm,"e");
    var textoEncriptar = textoEncriptar.replace(/imes/igm,"i");
    var textoEncriptar = textoEncriptar.replace(/ober/igm,"o");
    var textoEncriptar = textoEncriptar.replace(/ufat/igm,"u");


    //document.getElementById("logo").style.display="none";
    //document.getElementById("textbox2").style.display ="none";
    document.getElementById("textbox1").value = textoEncriptar;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}

function copiar() {
    var mensaje = document.querySelector("#textbox2");
    mensaje.select();
    document.execCommand("copy");
    alert("se copio");
    

    
}