let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $(document);

    //Al mover el raton por el elemento seleccionado
    //Ejecutamos la funcion "moverMouse"
    x.mousemove(moverMouse);
}

function moverMouse(event) {
    //Si queremos recuperar la coordenada donde 
    // se encuentra en ese momento el mouse, jQuery 
    // pasa el objeto event como parámetro 
    // (con la ventaja que hace transparente las 
    // diferencias entre IE y otros navegadores)
    
    let x = $("#corx");

    //Imprimer la cordenada X del raton
    x.text("coordenada x=" + event.clientX);

    x = $("#cory");

    //Imprimer la cordenada Y del raton
    x.text("coordenada y=" + event.clientY);
}