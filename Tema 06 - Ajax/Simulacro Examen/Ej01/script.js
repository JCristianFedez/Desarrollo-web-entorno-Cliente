addEventListener("DOMContentLoaded", inicializarEventos);

function inicializarEventos() {
    cargarComAutonoma();
    let comAutonoma = document.getElementById("comAutonoma");
    comAutonoma.addEventListener("change", seleccionCom);

    let provincias = document.getElementById("provincias");
    provincias.addEventListener("change", muestraDatosProvincia);
}

//FUNCIONES PARA CARGAR COMUNIDADES AUTONOMAS

let conexion1;
function cargarComAutonoma() {
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = cargarDatosComunidadAutonoma;
    conexion1.open("GET", "cargar_comunidades_autonomas.php", true);
    conexion1.send();
}

function cargarDatosComunidadAutonoma() {
    let comAutonoma = document.getElementById("comAutonoma");
    let op;

    if (conexion1.readyState == 4) {
        //Vacio la lista
        while (comAutonoma.firstElementChild) {
            comAutonoma.remove(comAutonoma.firstElementChild);
        }

        let datos = JSON.parse(conexion1.responseText);

        op = document.createElement("option");
        op.value = "";
        op.text = "Seleccionar...";
        comAutonoma.add(op);

        for (let i = 0; i < datos.length; i++) {
            op = document.createElement("option");
            op.value = datos[i].id;
            op.text = datos[i].nombre;

            comAutonoma.add(op);

        }

    } else {

    }
}




//FUNCIONES PARA CARGAR PROVINCIAS

function seleccionCom(elEvento) {
    let e = elEvento || window.event;
    recuperarDatos(e.target.value);
}

let conexion2;
function recuperarDatos(comAutonoma) {
    let url = `cargar_provincias.php?cod=${comAutonoma}`;
    conexion2 = new XMLHttpRequest();
    conexion2.onreadystatechange = cargarProvincias;
    conexion2.open("GET", url, true);
    conexion2.send();
}

function cargarProvincias() {
    let comAutonoma = document.getElementById("comAutonoma");
    let provinciasOption = document.getElementById("provincias");
    let infoProvincia = document.getElementById("infoProvincia");
    let op;
    if (comAutonoma.value != "") {
        if (conexion2.readyState == 4) {
            infoProvincia.innerHTML = "";
            while (provinciasOption.firstElementChild) {
                provinciasOption.remove(provinciasOption.firstElementChild);
            }

            op = document.createElement("option");
            op.value = "";
            op.text = "Seleccionar...";
            provinciasOption.add(op);

            let xml = conexion2.responseXML;
            let provincia = xml.getElementsByTagName("provincia");
            let nombre;
            let id;

            for (let i = 0; i < provincia.length; i++) {
                op = document.createElement("option");

                nombre = provincia[i].getElementsByTagName("nombre");
                op.text = nombre[0].innerHTML;

                id = provincia[i].getElementsByTagName("id");
                op.value = id[0].innerHTML;

                provinciasOption.add(op);
            }

        } else {
            infoProvincia.innerHTML = "<img src='cargando.gif'>";
        }

    } else {//Si selecciono la comunidad autonoma "Selecinoar ..." elimino las provincias y su info
        while (provinciasOption.firstElementChild) {
            provinciasOption.remove(provinciasOption.firstElementChild);
        }
        infoProvincia.innerHTML = "";
    }
}


//FUNCIONES PARA CARGAR INFO DE PROVINCIAS
function muestraDatosProvincia() {
    let infoProvincia = document.getElementById("infoProvincia");
    let provinciasOption = document.getElementById("provincias");

    if (provinciasOption.value != "") {
        infoProvincia.innerHTML = `ID: ${provinciasOption.value}, Nombre: ${provinciasOption[provinciasOption.selectedIndex].text}`;
    } else {
        infoProvincia.innerHTML = "";
    }
}