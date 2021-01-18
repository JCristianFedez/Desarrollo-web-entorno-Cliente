function cargar() {
    document.getElementById("enviar").addEventListener("click", validacion);
    document.getElementById("enviar").addEventListener("click", hayNinos);
    document.getElementById("hay-ninos").addEventListener("click", hayNinos);
}

function validacion() {
    let myDni = document.getElementById("dni");
    validarDNI(myDni);

    let fechaNacimiento = document.getElementById("fecha-nacimiento");
    mayorEdad(fechaNacimiento);

    let nAdultos = document.getElementById("n-adultos");
    numAdultos(nAdultos);

    let fechaEntrada = document.getElementById("fecha-entrada");
    let fechaSalida = document.getElementById("fecha-salida");
    entradaSalida(fechaEntrada, fechaSalida);
}

function hayNinos() {
    let hayNino = document.getElementById("hay-ninos");
    let nNino = document.getElementById("n-ninos");
    let literas = document.getElementById("literas");

    if (hayNino.checked) {
        nNino.disabled = false;
        literas.disabled = false;
        if (nNino.value == "") {
            nNino.setCustomValidity("Este campo es obligatorio");
        } else {
            nNino.setCustomValidity("");
        }
        if (literas.value == "") {
            literas.setCustomValidity("Este campo es obligatorio");
        } else {
            literas.setCustomValidity("");
        }
    } else {
        nNino.disabled = true;
        literas.disabled = true;
    }
}

function validarDNI(dni) {
    let dniValor=dni.value;
    if (dniValor != "") {
        let numero;
        let letr;
        let letras;
        let pat;

        pat = /^\d{8}-?[a-zA-Z]$/;

        if (pat.test(dniValor) == true) {
            numero = dniValor.substr(0, 8);
            letr = dniValor.substr(dniValor.length - 1, 1);
            numero = numero % 23;
            letras = "TRWAGMYFPDXBNJZSQVHLCKET";
            letras = letras.substring(numero, numero + 1);
            if (letras != letr.toUpperCase()) {
                dni.setCustomValidity("Dni erroneo, la letra del NIF no se corresponde");
            }
            else {
                dni.setCustomValidity("");
            }
        } else {
            dni.setCustomValidity("Dni erroneo, formato no válido");
        }
    }
}

function mayorEdad(edad) {
    let aux;

    let myNacimiento = edad.value.split("-");
    let ano = new Date().getFullYear();
    let mes = new Date().getMonth() + 1;
    let dia = new Date().getDate();
    aux = ano - myNacimiento[0];

    if (dia >= myNacimiento[2] && myNacimiento[1] == mes) {
        aux++;
    }

    if (myNacimiento[1] > mes) {
        aux--;
    }

    if (aux >= 18) {
        edad.setCustomValidity("");
    } else {
        edad.setCustomValidity("Debe ser mayor de edad");
    }
}

function numAdultos(nAdultos) {
    if (nAdultos.value != "") {
        nAdultos.setCustomValidity("");
    } else {
        nAdultos.setCustomValidity("Debe selecionar uno o dos");
    }
}

function entradaSalida(fechaEntra, fechaSal) {
    let entrada = fechaEntra.value.replaceAll("-", "");
    let salida = fechaSal.value.replaceAll("-", "");

    let ano = new Date().getFullYear().toString();
    let mes = (new Date().getMonth() + 1).toString();
    if(mes<10){
        mes="0"+mes;
    }
    let dia = new Date().getDate().toString();
    let hoy=ano.concat(mes,dia);

    if(hoy>entrada && entrada!=""){
        fechaEntra.setCustomValidity("No puede reservar en un dia ya pasado");
    }else{
        fechaEntra.setCustomValidity("");
    }

    if (entrada > salida) {
        fechaSal.setCustomValidity(
            "La fecha de salida debe ser posterior a la de entrada"
        );
    } else {
        fechaSal.setCustomValidity("");
    }
}
addEventListener("DOMContentLoaded", cargar);