// Invoca a la función inicializarEventos cuando la página 
// web está completamente cargada (similar a window.onload)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    //Cojo el elemento con la id "boton1",
    //similar a getElementById
    let x = $("#boton1");

    //Cuando se haga click en el elemento seleccionado
    //se ejecutara la funcion resaltar, parecido
    //al addEventListener
    x.click(resaltar);
}

function resaltar() {
    //Cojo los elementos con la clase "resaltado"
    //similar a getElementsByClassName
    let x = $(".resaltado");

    //Les cambio a los todos los elementos selccionados
    //el color de fondo, similar a style
    x.css("background-color", "#ffff00");
}