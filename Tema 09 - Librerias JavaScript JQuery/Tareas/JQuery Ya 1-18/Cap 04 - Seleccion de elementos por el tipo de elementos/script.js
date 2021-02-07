// Invoca a la función inicializarEventos cuando la página 
// web está completamente cargada (similar a window.onload)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    //Se cojen todos los elementos tr
    //similar al elemento getElementsByTagName
    let x = $("tr");

    //Cuando se haga click en algun elemento x
    //se ejecuta la funcion presionFila, similar al addEventListener
    x.click(presionFila);
}

function presionFila() {
    //Se coje el elemento que ha ejecutado la funcion
    //similar al ev.target
    let x = $(this);

    //Se le cambia el color de fondo al elemento que haya
    //ejecutado la funcion
    x.css("background-color", "#eeeeee");
}