let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    //Cojo todos los parrafos del html
    let x = $("p");
    x.click(presionParrafoDocumento);

    //Cojo todos los elementos p dentro del
    //elemento con la id "tabla2"
    x = $("#tabla2 p");
    x.click(presionpresionParrafoSegundaTabla);
}

function presionParrafoDocumento() {
    alert('se presionó un párrafo del documento');
}

function presionpresionParrafoSegundaTabla() {
    alert('se presionó un párrafo contenido en la segunda tabla.');
}