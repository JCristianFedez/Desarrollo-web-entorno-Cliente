let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("td");

    //Cuando presionamos el raton dentro del elemento
    //seleccionado se ejecuta
    //la funcion "presionaMouse"
    x.mousedown(presionaMouse);

    //Cuando dejamos de presionar el raton se ejecuta
    //la funcion "sueltaMouse"
    x.mouseup(sueltaMouse);
}

function presionaMouse() {
    //Cambiamos el color del fondo del elemento que ejecuta
    //la funcion
    $(this).css("background-color", "#ff0");
}

function sueltaMouse() {
    //Cambiamos el color del fondo del elemento que ejecuta
    //la funcion
    $(this).css("background-color", "#fff");
}