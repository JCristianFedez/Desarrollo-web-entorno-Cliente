let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#text1");

    //Se ejecuta la funcoin tomaFoco cuando 
    //el elemento seleccionado toma el foco
    x.focus(tomaFoco);

    //Se ejecuta la funcoin tomaFoco cuando 
    //el elemento seleccionado pierde el foco
    x.blur(pierdeFoco);

    x = $("#text2");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
}

function tomaFoco() {
    //Cojemos el elemento que ha ejecutado la funcion
    let x = $(this);

    //Le ponemos un color
    x.css("color", "#f00");
}

function pierdeFoco() {
    //Cojemos el elemento que ha ejecutado la funcion
    let x = $(this);

    //Le ponemos un color
    x.css("color", "#00f");
}