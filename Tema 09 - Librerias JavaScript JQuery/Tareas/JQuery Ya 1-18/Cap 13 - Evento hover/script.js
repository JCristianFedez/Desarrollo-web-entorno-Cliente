let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("a");

    //Al introducir el raton en el elemento
    //seleccionado se ejecuta la primera funcion
    //en este caso "entraMouse" y al sacar el raton
    //se ejecuta la siguiente funcion en este caso
    //"saleMouse"
    x.hover(entraMouse, saleMouse);
}

function entraMouse() {
    //Cambio el color del fondo al elemento que ha
    //ejecutado la funcion
    $(this).css("background-color", "#ff0");
}

function saleMouse() {
    //Cambio el color del fondo al elemento que ha
    //ejecutado la funcion
    $(this).css("background-color", "#fff");
}