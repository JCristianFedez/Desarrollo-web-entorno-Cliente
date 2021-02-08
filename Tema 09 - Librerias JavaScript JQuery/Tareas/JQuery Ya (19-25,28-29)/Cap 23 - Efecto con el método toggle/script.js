let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#boton1");
    x.click(ocultarMostrarRecuadro);
}

/**
 * Muestra o oculta el elmento seleccionado,
 * es una suma de show y hide.
 * La propia funcion comprueba si tiene que mostrar 
 * o ocultar
 */
function ocultarMostrarRecuadro() {
    let x = $("#descripcion");
    x.toggle("slow");
}

// Al igual que todos los anteriores efectos
// puedes indicarle como quieres que se haga el efecto
// ademas si quremos que ejecute una funcion cuand termine
// P.E: $(selector).toggle(speed,[easing],[callback])