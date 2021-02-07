
// Invoca a la función inicializarEventos cuando la página 
// web está completamente cargada (similar a window.onload)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    //Cojo el elemento con el id boton1
    //similar al elemento getElementById
    let x = $("#boton1");

    //Cuando se haga click en el evento se ejecuta la funcion presionBoton
    //, similar al addEventListener
    x.click(presionBoton)
}

function presionBoton() {
    alert("Se presionó el botón");
}
