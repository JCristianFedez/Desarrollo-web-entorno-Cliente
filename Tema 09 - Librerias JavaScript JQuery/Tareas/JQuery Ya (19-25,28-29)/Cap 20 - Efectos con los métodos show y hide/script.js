
// Cuando carge el sitio ejecutamos la funcion
// inicializarEventos
let x = $(document);
x.ready(inicializarEventos);

// Cargo los eventos
function inicializarEventos() {
    let x = $("#boton1");
    x.click(ocultarRecuadro);
    x = $("#boton2");
    x.click(mostrarRecuadro);
}

/**
 * Ocultamos el elemento seleccionado con la 
 * velocidad indicada
 */
function ocultarRecuadro() {
    let x = $("#descripcion");
    x.hide("slow");
}

/**
 * Mostramos el elemento seleccionado con la 
 * velocidad indicada
 */
function mostrarRecuadro() {
    let x = $("#descripcion");
    x.show("fast");
}

// Ambas funciones se pueden indicar con milisegundos
// ademas de indicar que funcion queremos que se ejecute
// cuando termine P.e: 
//show([cantidad de milisegundos],[función])
//hide([cantidad de milisegundos],[función])