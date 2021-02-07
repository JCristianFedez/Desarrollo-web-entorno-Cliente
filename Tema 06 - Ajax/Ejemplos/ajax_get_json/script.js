addEventListener("DOMContentLoaded", inicializarEventos);

function inicializarEventos() {
    cargarPaises();

    let pais = document.getElementById("pais");
    pais.addEventListener("change", seleccionPais, false);

    let ciudades = document.getElementById("ciudades");
    ciudades.addEventListener("change", seleccionCiudad, false);

    let insertarPais = document.getElementById("insertarPais");
    insertarPais.addEventListener("submit", insertPais, false);

    let insertarCiudad = document.getElementById("submitNuevaCiudad");
    insertarCiudad.addEventListener("click",insertCiudad,false);
}

//FUNCION PARA CARGAR TODOS LOS PAISES
let conexion1;
function cargarPaises() {
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = cargarDatosPaises;
    conexion1.open("GET", "cargar_paises.php", true);
    conexion1.send();
}

function cargarDatosPaises() {
    let paisSelect = document.getElementById("pais");
    let paisSelectNuevaCiudad = document.getElementById("paisNuevaCiudad");

    let op;
    let opPaisNuevaCiudad;
    if (conexion1.readyState == 4) {

        if (conexion1.status != 200) {
            console.log(conexion1.statusText);
            return;
        }
        //Vacio la lista
        vaciarSelect(paisSelect);
        vaciarSelect(paisSelectNuevaCiudad);

        op = document.createElement("option");
        op.value = "";
        op.text = "Seleccionar...";
        opPaisNuevaCiudad = op.cloneNode(true);

        paisSelect.add(op);
        paisSelectNuevaCiudad.add(opPaisNuevaCiudad);

        let datos = JSON.parse(conexion1.responseText);


        for (let i = 0; i < datos.length; i++) {
            op = document.createElement("option");

            op.value = datos[i].id;
            op.text = datos[i].nombre;
            console.log(op.value);
            opPaisNuevaCiudad = op.cloneNode(true);

            paisSelect.add(op);
            paisSelectNuevaCiudad.add(opPaisNuevaCiudad);
        }
    } else {
        console.log("Procesando");
    }
}


//FUNCIONES PARA CARGAR CIUDADES
function seleccionPais(elEvento) {
    vaciarSelect(document.getElementById("ciudades"));
    let e = elEvento || window.event;
    recuperarCiudades(e.target.value);
}

let conexion2;
function recuperarCiudades(ciudad) {
    let url = `cargar_ciudades.php?id=${ciudad}`;
    conexion2 = new XMLHttpRequest();
    conexion2.onreadystatechange = cargarCiudades;
    conexion2.open("GET", url, true);
    conexion2.send();
}

function cargarCiudades() {
    let ciudadesSelect = document.getElementById("ciudades");
    let infoCiudad = document.getElementById("infoCiudad");
    let op;

    //Si selecciono el pais "Selecinoar ..." elimino las ciudades y su info
        vaciarSelect(ciudadesSelect);
        infoCiudad.innerHTML = "";

    if (conexion2.readyState == 4) {

        if (conexion2.status != 200) {
            console.log(conexion2.statusText);
            return;
        }

        //Vacio la lista
        vaciarSelect(ciudadesSelect);

        op = document.createElement("option");
        op.value = "";
        op.text = "Seleccionar...";
        ciudadesSelect.add(op);

        let datos = JSON.parse(conexion2.responseText);
        
        // Por si hay paises sin ciudades
        if(datos != null){
    
            for (let i = 0; i < datos.length; i++) {
                op = document.createElement("option");

                op.value = datos[i].id;
                op.text = datos[i].nombre;
    
                ciudadesSelect.add(op);
            }
        }
    } else {
        console.log("Procesando");
    }

}




//FUNCOINES PARA CARGAR INFO DE CIUDADES
function seleccionCiudad(elEvento) {
    document.getElementById("infoCiudad").innerHTML = "";

    let e = elEvento || window.event;
    recuperarInfoCiudad(e.target.value);
}

let conexion3;
function recuperarInfoCiudad(ciudad) {
    let url = `cargar_info_ciudad.php?id=${ciudad}`;
    conexion3 = new XMLHttpRequest();
    conexion3.onreadystatechange = muestraDatosCiudad;
    conexion3.open("GET", url, true);
    conexion3.send();
}

function muestraDatosCiudad() {
    let ciudadesSelect = document.getElementById("ciudades");
    let infoCiudad = document.getElementById("infoCiudad");
    let paisSelect = document.getElementById("pais");

    //Si selecciono el pais "Selecinoar ..." elimino las ciudades y su info
    if (paisSelect.value == "" || ciudadesSelect.value == "") {
        infoCiudad.innerHTML = "";
        return;
    }

    if (conexion3.readyState == 4) {

        if (conexion3.status != 200) {
            console.log(conexion3.statusText);
            return;
        }

        //Vacio la info
        infoCiudad.innerHTML = "";

        let datos = JSON.parse(conexion3.responseText);

        infoCiudad.innerHTML = `Id: ${datos.id} - `;
        infoCiudad.innerHTML += `Nombre: ${datos.nombre} - `;
        infoCiudad.innerHTML += `Fecha Creacion: ${datos.fecha_creacion}`;


    } else {
        console.log("Procesando");
    }
}

function vaciarSelect(select) {
    while (select.firstElementChild) {
        select.remove(select.firstElementChild);
    }
}



//FUNCIONES PARA INSERTAR PAISES
function insertPais(elEvento) {
    document.getElementById("submitNuevoPais").disabled = true;

    let e = elEvento || window.event;
    e.preventDefault();

    let nuevoPais = document.getElementById("nuevoPais").value;
    document.getElementById("nuevoPais").value = "";
    
    enviarDatosNuevoPais(nuevoPais);

}

let conexion4;
function enviarDatosNuevoPais(nombrePais) {
    let url = `insertar_pais.php?nombre=${nombrePais}`;
    conexion4 = new XMLHttpRequest;
    conexion4.onreadystatechange = recargaPaises;
    conexion4.open("GET", url, true);
    conexion4.send();

}

function recargaPaises() {
    if (conexion4.readyState == 4) {
        cargarPaises();
        document.getElementById("submitNuevoPais").disabled = false;
    }
}


//INGRESAR NUEVA CIUDAD
function insertCiudad(elEvento) {

    let e = elEvento || window.event;
    e.preventDefault();

    let nombre = document.getElementById("nombreNuevaCiudad").value;
    let poblacion = document.getElementById("poblacionNuevaCiudad").value;
    let fecha = document.getElementById("fechaNuevaCiudad").value;
    let idPais = document.getElementById("paisNuevaCiudad").value;

    if(idPais == ""){
        document.getElementById("paisNuevaCiudad").setCustomValidity("Deve seleccionar un pais");
        document.getElementById("paisNuevaCiudad").reportValidity();
    }else{
        document.getElementById("paisNuevaCiudad").setCustomValidity("");
        document.getElementById("paisNuevaCiudad").reportValidity();
        document.getElementById("nombreNuevaCiudad").value = "";
        document.getElementById("poblacionNuevaCiudad").value = "";
        document.getElementById("fechaNuevaCiudad").value = "";
        document.getElementById("paisNuevaCiudad").value = "";
        document.getElementById("submitNuevaCiudad").disabled = true;

        enviarDatosNuevaCiudad(nombre,poblacion,fecha,idPais);
    }
}

let conexion6;
function enviarDatosNuevaCiudad(nombre,poblacion,fecha,idPais) {
    let url = `insertar_ciudad.php?nombre=${nombre}&poblacion=${poblacion}&fecha=${fecha}&idPais=${idPais}`;
    conexion6 = new XMLHttpRequest;
    conexion6.onreadystatechange = recargaCiudades;
    conexion6.open("GET", url, true);
    conexion6.send();

}

function recargaCiudades() {
    if (conexion6.readyState == 4) {
        document.getElementById("submitNuevaCiudad").disabled = false;
        recuperarCiudades(document.getElementById("pais").value);
    }
}