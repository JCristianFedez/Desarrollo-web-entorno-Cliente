let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#enviar");
    x.click(presionSubmit);
}

function presionSubmit() {
    // Recojemos el valor del elemento id=nro
    let v = $("#nro").val();

    // Hemos inicializado las siguientes propiedades:

    // async : Indica si la comunicación será asincrónica (true) o sincrónica (false)
    // type : Indica el método que se envían los datos (pudiendo ser GET o POST)
    // dataType : Indica el tipo de datos que se va a recuperar (pudiendo ser "html","xml","json","script")
    // contentType : Indicamos como se empaquetan los datos para enviarlos al servidor (normalmente "application/x-www-form-urlencoded")
    // url : Indicamos el nombre de la página que procesará la petición de datos.
    // data : Indicamos los datos a enviar al servidor.
    // beforeSend : Indicamos el nombre de la función que se ejecutará previo al envío de datos (en mi caso muestro gif)
    // success : Indicamos la función que se ejecuta cuando finalizó el envío de datos del servidor y además ocurrió todo en forma correcta (en mi caso recupero el dato devuelto y lo muestro en la página)
    // timeout : El tiempo máximo a esperar por la petición de datos.
    // error : El nombre de la función que se ejecuta si los datos no llegan del servidor.
    
    $.ajax({
        async: true,
        type: "POST",
        dataType: "html",
        contentType: "application/x-www-form-urlencoded",
        url: "pagina1.php",
        data: "numero=" + v,
        beforeSend: inicioEnvio,
        success: llegadaDatos,
        timeout: 4000,
        error: problemas
    });


    // Return false es para que no redireccione como
    // preventDefault();
    return false;
}

function inicioEnvio() {
    let x = $("#resultados");

    // Mientras que el servidor devuelve los datos muestro un gif animado
    x.html('<img src="../cargando.gif">');
}

function llegadaDatos(datos) {
    // Introduzco los datos devuetos por el servidor como texto 
    // en el elemento id=resultados
    $("#resultados").text(datos);
}

function problemas() {
    // Si hay algun problema imprimo el siguiente
    $("#resultados").text('Problemas en el servidor.');
}