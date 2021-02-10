let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    widgets();
    interactions();
    efects();
}

function widgets() {
    $("#accordion").accordion();

    $("#autocomplete").autocomplete({
        source: ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"]
    });

    $("#button").button();
    $("#button-icon").button({
        icon: "ui-icon-gear",
        showLabel: false
    });

    $("#radio").buttonset();

    $("#datepicker").datepicker();

    $("#dialog").dialog({ autoOpen: false });
    $("#opener").click(function () {
        $("#dialog").dialog("open");
    });

    $("#menu").menu();

    $("#progressbar").progressbar({
        value: false
    });

    $("#slider").slider();

    $("#tabs").tabs();

}

function interactions() {
    $("#draggable").draggable();

    $("#droppable").droppable({
        drop: function () {
            alert("dropped");
        }
    });

    $("#resizable").resizable();

    $("#selectable").selectable();

    $("#sortable").sortable();
}

function efects() {
    $("#toggleDropTitle").click(function () {
        $("#toggleDrop").toggle("drop");
    });

    $( "#toggleScaleTitle" ).click(function() {
        $( "#toggleScale" ).toggle({ effect: "scale", direction: "horizontal" });
      });


      $( "#toggleExplodeTitle" ).click(function() {
        $( "#toggleExplode" ).toggle( "explode" );
      });
    
}