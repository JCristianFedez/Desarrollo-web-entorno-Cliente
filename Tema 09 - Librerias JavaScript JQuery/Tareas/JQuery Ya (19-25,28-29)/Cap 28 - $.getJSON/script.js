let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#boton1");
    x.click(presionSubmit);
}

/**
 * La funcion $.getJSON nos retorna un objeto ya en javascript
 */
function presionSubmit() {
    // Recojemos el valor del elemento con la id "dni"
    let v = $("#dni").val();

    // Indicamos la pagina php
    // Dentro de las llaves van los parametros que se enviaran
    // al archivo php "dni"=nombre del parametro, "v"=valor
    // al final se ejecuta la funcion llegadaDatos cuando el 
    // servidor envie los datos
    $.getJSON("pagina1.php", { dni: v }, llegadaDatos);

    // El return false es para que no redireccione a la pagina
    // php
    return false;
}

function llegadaDatos(datos) {
    //(datos) es el objeto o objetos devueltos por el servidor

    // Ahora simplemente al elemento resutlados le añadimos el 
    // siguiente contenido
    $("#resultados").html("Nombre:" + datos.nombre +
        "<br>" + "Apellido:" +
        datos.apellido + "<br>" +
        "Direccion:" + datos.direccion);
}