addEventListener("DOMContentLoaded", inicializarEventos, false);

function inicializarEventos() {
    let btn1 = document.getElementById("boton1");
    btn1.addEventListener("click", enviarDatos);
}

function enviarDatos(elEvento) {
    let e = elEvento || window.event;

    e.preventDefault();
    enviarFormulario();
}

function retornarDatos() {
    let obj = {
        nombre: "Cristian",
        edad: 20,
        sueldos: [1200, 1500, 2000]
    };

    let cadena = `cadena=${encodeURIComponent(JSON.stringify(obj))}`;
    return cadena;
}

let conexion1;
function enviarFormulario() {

    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open("POST", "pagina1.php", true);
    conexion1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    conexion1.send(retornarDatos());
}

function procesarEventos() {
    let resultado = document.getElementById("resultado");

    if (conexion1.readyState == 4) {
        resultado.innerHTML = conexion1.responseText;
    } else {
        resultado.innerHTML = "<img src='../../../Imagenes/cargando.gif'>";
    }
}