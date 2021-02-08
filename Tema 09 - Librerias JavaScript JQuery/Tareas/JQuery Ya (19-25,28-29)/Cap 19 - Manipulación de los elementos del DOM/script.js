let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#boton1");
    x.click(eliminarElementos)
    x = $("#boton2");
    x.click(restaurarLista)
    x = $("#boton3");
    x.click(anadirElementoFinal)
    x = $("#boton4");
    x.click(anadirElementoPrincipio)
    x = $("#boton5");
    x.click(eliminarElementoFinal)
    x = $("#boton6");
    x.click(eliminarElementoPrincipio)
    x = $("#boton7");
    x.click(eliminarPrimeroSegundo)
    x = $("#boton8");
    x.click(eliminarDosUltimos)
}

/**
 * Eliminamos el contenido de el elemento indicado,
 */
function eliminarElementos() {
    let x = $("ul");
    x.empty();
}

/**
 * Susitituimos contenido HTML del elemento seleccionado,
 * por el indicado entre los aprentesis
 */
function restaurarLista() {
    $("ul").html('<li>Primer item.</li><li> Segundo item.</li > <li>Tercer item.</li><li>Cuarto item.</li>');
}

/**
 * Insertamos contenido HTML como hijo mejor
 * de elemento seleccionado.
 */
function anadirElementoFinal() {
    let x = $("ul");
    x.append("<li>otro item al final</li>");
}

/**
 * Insertamos contenido HTML como hijo mayor
 * de elemento seleccionado
 */
function anadirElementoPrincipio() {
    let x = $("ul");
    x.prepend("<li>otro item al principio</li>");
}

function eliminarElementoFinal() {
    let x = $("li");
    let cantidad = x.length;

    // Indicamos la posicion del elemento que necesitamos,
    // es decir dentro de los elementos li le decimos que coja
    // el ultimo
    x = x.eq(cantidad - 1);

    // Eliminamos el elemento elegido
    x.remove();
}

function eliminarElementoPrincipio() {
    let x = $("li");

    // Cojemos el li de la posicion 0
    x = x.eq(0);

    // Lo eliminamos
    x.remove();
}

function eliminarPrimeroSegundo() {
    let x = $("li");

    // Recojemos los elementos que estan desde la posicion 0 
    // a la posicion 2 sin incluir esta ultima
    x = x.slice(0, 2);

    // Los eliminamos
    x.remove();
}

function eliminarDosUltimos() {
    let x = $("li");

    // Recojemos los elementos que estan desde la penultima 
    // posicion hasta el final ya que no le hemos indicado
    // el rango solo el inicio
    x = x.slice(x.length - 2);

    // Los eliminamos
    x.remove();
}