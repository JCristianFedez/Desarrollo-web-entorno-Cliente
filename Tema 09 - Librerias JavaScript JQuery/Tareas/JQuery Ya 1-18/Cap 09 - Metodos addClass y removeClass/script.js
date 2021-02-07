// Invoca a la función inicializarEventos cuando la página 
// web está completamente cargada (similar a window.onload)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#boton1");
    x.click(asociarClase);
    x = $("#boton2");
    x.click(desasociarClase);
}

function asociarClase() {
    let x = $("#descripcion");

    //Le añado al elemento seleccionado
    //la clase recuadro.
    //Similar a elemento.classList.add("clase")
    x.addClass("recuadro");
}

function desasociarClase() {
    let x = $("#descripcion");

    //Le quito al elemento seleccionado
    //la clase recuadro
    //Similar a elemento.classList.remove("clase")
    x.removeClass("recuadro");
}