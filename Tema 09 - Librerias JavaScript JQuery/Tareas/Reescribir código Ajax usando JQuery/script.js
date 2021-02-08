let x = $(document);

x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#carreras");
    x.change(cambiarSelect);
}

function cambiarSelect() {
    let codigo = $('#carreras').val();
    if (codigo != 0) {
        $.ajax({
            async: true,
            type: "GET",
            dataType: "xml",
            contentType: "application/x-www-form-urlencoded",
            url: "pagina1.php",
            data: "cod=" + codigo,
            beforeSend: inicioEnvio,
            success: procesarEventos,
            timeout: 4000,
            error: problemas
        });
    } else {
        $("#materias").empty();
    }
    return false;
}
function inicioEnvio() {
    let x = $("#resultados");
    x.text('Cargando');
    $("#materias").empty();
}

function problemas() {
    let x = $("#resultados");
    x.text('Hay problemas');
}

function procesarEventos(datos) {
    // Recojo las etiquetas materia
    let materias = $(datos).find("materia");
    let select = $("#materias");
    let option;

    // Recoro todas las materias
    materias.each(function (){
        option = new Option($(this).text(),"Aqui value");

        select.append(option);
    });

    $("#resultados").remove();
}