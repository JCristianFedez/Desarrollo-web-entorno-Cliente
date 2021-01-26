addEventListener("DOMContentLoaded",inicializarEventos,false);

function inicializarEventos(){
    let btn = document.getElementById("boton1");
    btn.addEventListener("click",presionBoton,false);
}

function presionBoton(elEvento){
    let e = elEvento || window.event;
    let respuesta = document.getElementById("respuesta");
    let str = "";

    let cadena ='{"microprocesador":"pentium",'+
                '"memoria":1024,'+
                '"discos":[80,250]'+
                '}';

    let maquina = JSON.parse(cadena);

    str += `Microprocesador : ${maquina.microprocesador}<br>`;
    str += `Memoria ram : ${maquina.memoria}<br>`;
    str += `Capacidad disco 1 : ${maquina.discos[0]}<br>`;
    str += `capacidad disco 2 : ${maquina.discos[1]}<br>`;
    respuesta.innerHTML = str;
}