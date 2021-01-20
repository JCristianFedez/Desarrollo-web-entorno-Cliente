addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    let ref;
    ref = document.getElementById("fecha");

    let vec = ref.getElementsByTagName("a");


    for (let i = 0; i < vec.length; i++) {
        vec[i].addEventListener("click", presionEnlace, false);
    }
}

function presionEnlace(e) {
    e.preventDefault();
    var url = e.target.getAttribute('href');
    verComentarios(url);
}


var conexion1;

function verComentarios(url) {
    if (url == '') {
        return;
    }
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open("GET", url, true);
    conexion1.send();
}

function procesarEventos() {
    var detalles = document.getElementById("comentarios");
    if (conexion1.readyState == 4) {
        detalles.innerHTML = conexion1.responseText;
    } else {
        detalles.innerHTML = 'Cargando...';
    }
}