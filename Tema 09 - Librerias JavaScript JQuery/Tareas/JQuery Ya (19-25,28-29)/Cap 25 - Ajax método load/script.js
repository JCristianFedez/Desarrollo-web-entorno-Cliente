let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#menu a");
    x.click(presionEnlace);
}

function presionEnlace() {
    // Cojemos el valor del atributo "href" del elemento
    // que ha ejecutado la funcoin
    let pagina = $(this).attr("href");

    // Cojemos el elemento donde se almacenara el resultado
    let x = $("#detalles");

    // Cargamos el texto debuelto por el archivo php
    // en el elemento indicado
    x.load(pagina);

    // Con return hacemos lo mismo que con preventDefault(),
    // para que no rediriga
    return false;
}