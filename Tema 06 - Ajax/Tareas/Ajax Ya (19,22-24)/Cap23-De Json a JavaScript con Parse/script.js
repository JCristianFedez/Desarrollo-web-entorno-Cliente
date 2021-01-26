addEventListener("DOMContentLoaded", inicializarEventos, false);

function inicializarEventos() {
    let btn = document.getElementById("boton1");
    btn.addEventListener("click", presionBoton, false);
}

let conexion1;
function presionBoton(elEvento) {
    let e = elEvento || window.event;
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open("GET", "pagina1.php", true);
    conexion1.send();
}

function procesarEventos() {
    let resultados = document.getElementById("resultados");

    if (conexion1.readyState == 4) {
        let datos = JSON.parse(conexion1.responseText);
        let salida = "";

        for (let i = 0; i < datos.length; i++) {
            salida += `Codigo: ${datos[i].codigo} <br>`;
            salida += `Descripcion: ${datos[i].descripcion} <br>`;
            salida += `Precio: ${datos[i].precio} <br><br>`;
        }
        resultados.innerHTML = salida;
    } else {
        resultados.innerHTML = "<img src='cargando.gif'>";
    }
}