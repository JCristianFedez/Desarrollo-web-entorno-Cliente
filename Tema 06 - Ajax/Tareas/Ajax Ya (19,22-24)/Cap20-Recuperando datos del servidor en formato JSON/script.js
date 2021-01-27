addEventListener("DOMContentLoaded", inicializarEventos, false);

function inicializarEventos() {
    let btn1 = document.getElementById("boton1");
    btn1.addEventListener("click", presionBoton, false);
}

function presionBoton(elEvento) {
    let e = elEvento || window.event;

    e.preventDefault();
    enviarFormulario();
}

function retornarDatos() {
    let cad = "";
    let dni = document.getElementById("dni").value;

    cad = `dni=${encodeURIComponent(dni)}`;
    return cad;
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
    let resultados = document.getElementById("resultados");

    if (conexion1.readyState == 4) {
        let datos = JSON.parse(conexion1.responseText);
        let salida = `Apellido: ${datos.apellido}<br>`;
        salida += `Nombre: ${datos.nombre}<br>`;
        salida += `Dirección donde debe votar: ${datos.direccion}<br>`;
        resultados.innerHTML = salida;
    } else {
        resultados.innerHTML = "<img src='../../../Imagenes/cargando.gif'>";
    }
}
