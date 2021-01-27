addEventListener("DOMContentLoaded",inicializarEventos,false);

function inicializarEventos(){
    let btn1 = document.getElementById("boton1");
    btn1.addEventListener("click",mostrarConversion,false);
}

function mostrarConversion(){
    let obj = {
        nombre:"Cristian",
        edad:29,
        sueldos:[1200,1700,2000]
    };
    let cadena = JSON.stringify(obj);
    alert(cadena);
}