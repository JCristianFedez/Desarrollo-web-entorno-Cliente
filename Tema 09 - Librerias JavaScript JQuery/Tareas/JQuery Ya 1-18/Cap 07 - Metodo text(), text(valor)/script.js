// Invoca a la función inicializarEventos cuando la página 
// web está completamente cargada (similar a window.onload)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    //Cojo el elemento con la id "boton1"
    //Similar a getElementById
    let x = $("#boton1");

    //Cuando haga click en el elemento seleccionado
    //Ejecuto la funcion inidcada, similar a 
    //addEventListener
    x.click(extraerTexto);

    //Lo mismo que arriba
    x = $("#boton2");
    x.click(modificarTexto);
    x = $("#boton3");
    x.click(modificarDatosTabla);
}

function extraerTexto() {
    //Cojo el elemento con la id "parrafo1"
    //similar a getElementById
    let x = $("#parrafo1");

    //Mostramos el contenido del elemento seleccionado
    alert(x.text());
}

function modificarTexto() {
    //Cojo el elemento con la id "parrafo1"
    //similar a getElementById
    let x = $("#parrafo1");

    //Modificamos el texto del elemento seleccionado
    x.text("Nuevo texto del párrafo");
}

function modificarDatosTabla() {
    //Cojo los elementos con la etiqueta td,
    //similar a getElementsByTagName
    let x = $("td");

    //Modificamos el texto de todos los elementos 
    //seleccionado
    x.text("texto nuevo");
}