let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#recuadro");

    //Cuado hacemos doble click al
    // elemento seleccionado se ejecuta
    //la funcion "dobleClic"
    x.dblclick(dobleClic);
}

function dobleClic() {
    //Seleccionamos el elemento que ha ejecutado al funcion
    let x = $(this);

    //Lo escondemos
    x.hide()
}