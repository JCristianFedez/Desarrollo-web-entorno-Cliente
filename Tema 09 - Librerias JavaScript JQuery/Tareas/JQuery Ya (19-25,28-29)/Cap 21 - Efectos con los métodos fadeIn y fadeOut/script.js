let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#boton1");
    x.click(ocultarRecuadro);
    x = $("#boton2");
    x.click(mostrarRecuadro);
}


// Ocultamos el elemento seleccionado usando una transicion
// de desvanecimiento
function ocultarRecuadro() {
    let x = $("#descripcion");
    x.fadeOut("slow");
}

// Mostramos el elemento seleccionado usando una transicion
// de aparicion
function mostrarRecuadro() {
    let x = $("#descripcion");
    x.fadeIn("slow");
}

// Estas funciones al igual que show se puede indicar
// milisegundos y una funcion que se ejecute al terminar la 
// animacion E.j:
// fadeIn([cantidad de milisegundos],[función])
// fadeOut([cantidad de milisegundos],[función])