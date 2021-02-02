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
    x.click(agregarPropiedadBorder);

    //Lo mismo que arriba
    x = $("#boton2");
    x.click(recuperarPropiedadBorder);
    x = $("#boton3");
    x.click(eliminarPropiedadBorder);
}

function agregarPropiedadBorder() {
    //Cojo el elemento con la id "boton1"
    //Similar a getElementById
    let x = $("#tabla1");

    //Fijamos el borde del elemento seleccionado a 1
    x.attr("border", "1");
}

function recuperarPropiedadBorder() {
    //Cojo el elemento con la id "boton1"
    //Similar a getElementById
    let x = $("#tabla1");

    //Si el elemento tiene alguna propiedad de borde
    if (x.attr("border") != undefined)

        //Se muestraa las propiedades del borde
        alert(x.attr("border"));
    else
        alert("No está definida la propiedad border en la tabla");
}

function eliminarPropiedadBorder() {
    //Cojo el elemento con la id "boton1"
    //Similar a getElementById
    let x = $("#tabla1");

    //Se elimina la propiedad del elemento seleccionado
    x.removeAttr("border");
}