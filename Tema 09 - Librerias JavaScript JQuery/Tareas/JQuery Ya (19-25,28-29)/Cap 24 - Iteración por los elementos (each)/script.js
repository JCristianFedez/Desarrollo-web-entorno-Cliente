let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    // Recojemos todos p del contenedor parrafos
    let x = $("#parrafos p");

    // Recorremos todos los elementos y le indicamos
    // la funcion que procesara cada elemento
    x.each(resaltarParrafos);
}

function resaltarParrafos() {
    // Cargamos el elemento que ha ejecutado la funcion
    let x = $(this);

    // Si el texto del elemento es inferior a 100
    if (x.text().length < 100) {

        // Le cambiamos el color de fondo
        x.css("background-color", "#ff0");
    }
}