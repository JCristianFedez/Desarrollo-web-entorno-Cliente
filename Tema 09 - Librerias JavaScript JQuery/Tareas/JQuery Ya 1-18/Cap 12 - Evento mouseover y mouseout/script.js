let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("a");

    //Ejecuto funcion "entraMouse" al meter el 
    //raton en cualquier elemento seleccionado
    x.mouseover(entraMouse);

    //Ejecuto funcion "saleMouse" al sacar el 
    //raton en cualquier elemento seleccionado
    x.mouseout(saleMouse);
}

function entraMouse() {
    //Cambio el color de fondo del elemento
    //que haya ejecutado el evento
    $(this).css("background-color", "#ff0");
}

function saleMouse() {
    //Cambio el color de fondo del elemento
    //que haya ejecutado el evento
    $(this).css("background-color", "#fff");
}