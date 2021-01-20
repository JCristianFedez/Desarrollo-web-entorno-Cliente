addEventListener("DOMContentLoaded", inicializarEventos, false);

function inicializarEventos() {
    let ob = document.getElementById("boton1");
    ob.addEventListener("click", presionBoton, false);
}

function presionBoton(elEvento) {
    let e = elEvento || window.event;

    let ob1 = document.getElementById("puntuaje");
    let ob2 = document.getElementById("nombre");

    cargarVoto(ob1.value, ob2.value);
}

let conexion1;

function cargarVoto(voto, nom) {
    let url="pag1.php?puntuaje="+voto+"&nombre="+nom;
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open("GET",url,true);
    conexion1.send();
}

function procesarEventos(){
    let resultados = document.getElementById("resultados");

    if(conexion1.readyState == 4 && conexion1.status == 200 ){
        resultados.innerHTML = conexion1.responseText;
    }else{
        resultados.innerHTML = "Cargando...";
    }
}