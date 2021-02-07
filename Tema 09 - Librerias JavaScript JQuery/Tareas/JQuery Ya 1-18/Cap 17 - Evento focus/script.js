let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#buscar");

    //Cuando se hace foco al elemento seleccionado
    //se ejecuta la funcion tomafoco
    x.focus(tomaFoco);
}

function tomaFoco() {
    let x = $("#buscar");

    //Al elemento seleccionado le establecemos
    //el atributo value como ""
    x.attr("value", "");
}