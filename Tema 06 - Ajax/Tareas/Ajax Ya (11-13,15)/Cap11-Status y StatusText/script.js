addEventListener("DOMContentLoaded", inicializarEventos, false);

function inicializarEventos() {
    let frm = document.getElementById("formulario");
    frm.addEventListener("submit", enviarDatos, false);
}

function enviarDatos(elEvento) {
    let e = elEvento || window.event;
    e.preventDefault();
    enviarFormulario();
}

let conexion1;

function enviarFormulario() {
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    let num = document.getElementById("nro").value;
    //Para que funcione cambiar paginax por pagina1
    conexion1.open("GET", "paginax.php?numero=" + num, true);
    conexion1.send();
}

function procesarEventos() {
    let resultados = document.getElementById("resultados");

    if (conexion1.readyState == 4) {
        
        if (conexion1.status == 200) {
            resultados.innerHTML = conexion1.responseText;
        } else {
            resultados.innerHTML = "";
            alert(conexion1.statusText);
        }

    } else if (conexion1.readyState == 1 ||
        conexion1.readyState == 2 ||
        conexion1.readyState == 3) {
        resultados.innerHTML = 'Procesando...';
    }
}