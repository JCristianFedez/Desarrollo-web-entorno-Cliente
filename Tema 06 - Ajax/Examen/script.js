addEventListener("DOMContentLoaded", inicializarEventos);

function inicializarEventos() {
    cargarSelectMarcas();

    let cargarCoches = document.getElementById("cargarCoches");
    cargarCoches.addEventListener("click", seleccionarMarca);

    let cancelarCarga = document.getElementById("cancelarCarga");
    cancelarCarga.addEventListener("click",cancelarCargaCoches);
}

//FUNCIONES PARA CARGAR TODAS LAS MARCAS

let conexion1;
function cargarSelectMarcas() {
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = cargarDatosMarcas;
    conexion1.open("GET", "cargar_marcas.php", true);
    conexion1.send();
}

function cargarDatosMarcas() {
    let marcas = document.getElementById("marcas");
    let op;

        if (conexion1.readyState == 4) {

            op = document.createElement("option");
            op.value = "0";
            op.text = "Todas";
            marcas.add(op);

            let xml = conexion1.responseXML;
            let marca = xml.getElementsByTagName("marca");
            let nombre;
            let id;

            for (let i = 0; i < marca.length; i++) {
                op = document.createElement("option");

                nombre = marca[i].getElementsByTagName("nombre");
                op.text = nombre[0].innerHTML;

                id = marca[i].getElementsByTagName("id");
                op.value = id[0].innerHTML;

                marcas.add(op);
            }
        }
}



// FUNCIONES PARA CARGAR COCHES DE MARCA
function seleccionarMarca(){
    let marca = document.getElementById("marcas").value;

    // Para eliminar el posible menasje de error
    document.getElementById("listado").innerHTML = "";

    let parametros = `marca=${encodeURIComponent(marca)}`;
    recuperarCoches(parametros);
}   

let conexion2;
let tiempo;

function recuperarCoches(parametros){
    conexion2 = new XMLHttpRequest();
    conexion2.onreadystatechange = cargarCoches;
    conexion2.open("POST", "cargar_coches.php", true);
    conexion2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    conexion2.send(parametros);
    tiempo = setTimeout("finDeEspera()",3000);
}

function cargarCoches() {
    let listado = document.getElementById("listado");
    let mensaje = document.getElementById("mensaje");
    let tabla = "";
    if (conexion2.readyState == 4) {

        // Si falla el servidor muestro mensaje de error
        if (conexion2.status != 200) {
            mensaje.innerHTML = conexion2.statusText;
            return;
        }

        clearTimeout(tiempo);

        let datos = JSON.parse(conexion2.responseText);
        
        if(datos != null){
            tabla = "<table border=1>";
            tabla += "<tr><th>ID</th><th>Marca</th><th>Nombre</th><th>Precio</th></tr>"
            for (let i = 0; i < datos.length; i++) {
                tabla += "<tr>";
                tabla += "<td>"+datos[i].id+"</td>";
                tabla += "<td>"+datos[i].nombre+"</td>";
                tabla += "<td>"+datos[i].precio+"</td>";
                tabla += "<td>"+datos[i].marca+"</td>";
                tabla += "</tr>";
            }
            tabla += "</table>"
            listado.innerHTML = tabla;
            mensaje.innerHTML = "";

        }
    } else {
        mensaje.innerHTML = '<img src="cargando.gif" alt="">';
    }

}

/**
 * Funcion de albort automatico a los 3 segundos
 */
function finDeEspera() {
    let mensaje = document.getElementById("mensaje");
    conexion2.abort();
    mensaje.innerHTML = "Intente nuevamente mas tarde, el servidor esta sobrecargado";

    let listado = document.getElementById("listado");
    listado.innerHTML = "Operacion de carga de coches cancelada automaticamente al superarse los 3sg";
}

function cancelarCargaCoches(){
    if(conexion2.readyState != 4){
        let mensaje = document.getElementById("mensaje");
        conexion2.abort();
        clearTimeout(tiempo);
        mensaje.innerHTML = "Cancelado por el usuario...";
    
        let listado = document.getElementById("listado");
        listado.innerHTML = "Operacion de carga de coches cancelada por el usuario al pulsar el boton Cancelar";    
    }
}