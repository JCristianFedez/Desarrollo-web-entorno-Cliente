addEventListener("DOMContentLoaded", inicializarEventos, false);

function inicializarEventos() {
    let form = document.getElementById("formulario");
    form.addEventListener("submit", enviarDatos, false);
}

function enviarDatos(elEvento) {
    let e = elEvento || window.event;

    e.preventDefault(); //No dirige a url
    enviarFormulario();
}

let conexion1;

function enviarFormulario() {
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;

    let num = document.getElementById("numero").value;
    alert(`Valor de la propiedad readyState: ${conexion1.readyState}`);

    let url = `pag1.php?num=${num}`;
    conexion1.open("GET", url, true);
    conexion1.send();
}

function procesarEventos() {
    alert(`Valor de la propiedad readyState: ${conexion1.readyState}`);
    let resultados = document.getElementById("resultados");

    if (conexion1.readyState == 4) {
        resultados.innerHTML = conexion1.responseText;
    } else if (conexion1.readyState == 1 || conexion1.readyState == 2 || conexion1.readyState == 3) {
        resultados.innerHTML = 'Procesando...';
    }
}
