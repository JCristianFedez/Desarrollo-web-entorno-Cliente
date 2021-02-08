let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#boton1");
    x.click(reducirOpacidadRecuadro);
    x = $("#boton2");
    x.click(aumentarOpacidadRecuadro);
}

/**
 * Ponemos la opacidad al 50% del elemento seleccionado con
 * una animacion lenta
 */
function reducirOpacidadRecuadro() {
    let x = $("#descripcion");

    x.fadeTo("slow", 0.5);
}

/**
 * Ponemos la opacidad al 100% del elemento seleccionado con
 * una animacion lenta
 */
function aumentarOpacidadRecuadro() {
    let x = $("#descripcion");
    x.fadeTo("slow", 1);
}


// La velocidad tambien se puede indicar en milisegundos
// ademas de la opacidad y la velocidad podemos indicarle
// como queremos que fluya la animacion y si ejecutara
// una funcion cuando esta termine Ej:
// $(selector).fadeTo(speed,opacity,[easing],[callback])