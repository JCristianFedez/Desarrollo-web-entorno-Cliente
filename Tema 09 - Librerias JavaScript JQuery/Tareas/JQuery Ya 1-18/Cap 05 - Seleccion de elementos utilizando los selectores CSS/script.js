// Invoca a la función inicializarEventos cuando la página 
// web está completamente cargada (similar a window.onload)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    //Cojo el elemento con la id "boton1"
    //similar a getElementById
    let x = $("#boton1");

    //Cuando haga click en el elemento se ejecutara
    //la funcion ocultarItem, similar al addEventListener
    x.click(ocultarItem);
}

function ocultarItem() {
    //Cojo los li del elemento con la id "lista1"
    //Similar a getElementsByTagName().getElementById();
    let x = $("#lista1 li");
    
    //Oculto los elementos seleccionados anteriormente
    x.hide();
}