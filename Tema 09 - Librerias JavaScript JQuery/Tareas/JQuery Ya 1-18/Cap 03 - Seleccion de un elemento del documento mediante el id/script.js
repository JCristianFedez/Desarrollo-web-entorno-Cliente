// Invoca a la función inicializarEventos cuando la página 
// web está completamente cargada (similar a window.onload)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    //Cojo el elemento con la id "titulo1"
    //similar al elemento getElementById

    let x = $("#titulo1");

    //Cuando haca click en el elemento ejecuto
    //la funccion presionTitulo1, similar al addEventListener
    x.click(presionTitulo1)

    //Cojo el elemento con la id "titulo2"
    //similar al elemento getElementById
    x = $("#titulo2");

    //Cuando haca click en el elemento ejecuto
    //la funccion presionTitulo2, similar al addEventListener
    x.click(presionTitulo2)
}

function presionTitulo1() {
    //Cojo el elemento con la id "titulo1"
    //similar al elemento getElementById
    let x = $("#titulo1");

    //Le establezco al elemento los siguientes
    //estilos de css, similar al .style
    x.css("color", "#ff0000");
    x.css("background-color", "#ffff00");
    x.css("font-family", "Courier");
}

function presionTitulo2() {
    //Cojo el elemento con la id "titulo1"
    //similar al elemento getElementById
    let x = $("#titulo2");

    //Le establezco al elemento los siguientes
    //estilos de css, similar al .style
    x.css("color", "#ffff00");
    x.css("background-color", "#ff0000");
    x.css("font-family", "Arial");
}