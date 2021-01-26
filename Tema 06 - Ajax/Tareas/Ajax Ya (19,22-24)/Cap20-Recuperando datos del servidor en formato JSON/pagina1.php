<?php

header('Content-Type: text/html; charset=utf-8');
$nombre = "";
$apellido = "";
$direccion = "";

switch($_REQUEST["dni"]){
    case 1:
        $nombre = "Juan";
        $apellido = "Rodriguez";
        $direccion = "Colo 123";
        break;

    case 2:
        $nombre='Ana';
        $apellido='Maldonado';
        $direccion='Lima 245';
        break;

    case 3:
        $nombre='laura';
        $apellido='Pueyrredon';
        $direccion='Laprida 785';
        break;
}

echo "{'nombre':'$nombre',
    'apellido':'$apellido',
    'direccion':'$direccion'
    }";