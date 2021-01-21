addEventListener("DOMContentLoaded",inicializarEventos,false);

function inicializarEventos(){
    let ob = document.getElementById("boton1");
    ob.addEventListener("click",presionBoton,false);
}

function presionBoton(elEvento){
    let e = elEvento || window.event;

    let pais = document.getElementById("pais");
    recuperarDatos(pais.value);
}

let conexion1;
function recuperarDatos(pais){
    let url = `pag1.php?pa=${pais}`;
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open("GET",url,true);
    conexion1.send();
}

function procesarEventos(){
    let resultados = document.getElementById("resultados");

    if(conexion1.readyState == 4){
        let xml = conexion1.responseXML;
        let capital = xml.getElementsByTagName("capital");
        let superficie = xml.getElementsByTagName("superficie");
        let idioma = xml.getElementsByTagName("idioma");
        let poblacion = xml.getElementsByTagName("poblacion");

        resultados.innerHTML = 
            `Capital = ${capital[0].firstChild.nodeValue} <br>`+
            `Superficie = ${superficie[0].firstChild.nodeValue} <br>`+
            `Idioma = ${idioma[0].firstChild.nodeValue} <br>`+
            `Poblacion = ${poblacion[0].firstChild.nodeValue}`;

    }else{
        resultados.innerHTML = "Cargando...";
    }
}