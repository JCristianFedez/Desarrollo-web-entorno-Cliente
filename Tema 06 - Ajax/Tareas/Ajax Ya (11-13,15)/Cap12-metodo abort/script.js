addEventListener("DOMContentLoaded", inicializarEventos, false);

function inicializarEventos() {
    let menu = document.getElementById("menu");
    let enlaces = menu.getElementsByTagName("a");
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener("click", presionEnlace, false);
    }
}

function presionEnlace(elEvento) {
    let e = elEvento || window.event;

    e.preventDefault();
    var url = e.target.getAttribute('href');
    cargarHoroscopo(url);
}

let conexion1;
let tiempo;

function cargarHoroscopo(url) {
    if (url == "") {
        return;
    }

    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open("GET", url, true);
    conexion1.send();
    tiempo = setTimeout("finDeEspera()", 3000);
}

function procesarEventos() {
    let detalles = document.getElementById("detalles");

    if (conexion1.readyState == 4) {
        clearTimeout(tiempo);
        detalles.innerHTML = conexion1.responseText;
    } else if (conexion1.readyState == 1) {
        detalles.innerHTML = "Cargando...";
    }
}

function finDeEspera() {
    let detalles = document.getElementById("detalles");
    conexion1.abort();
    detalles.innerHTML = "Intente nuevamente mas tarde, el servidor esta sobrecargado";
}