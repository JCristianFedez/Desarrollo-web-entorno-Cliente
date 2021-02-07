<?php
header('Content-Type: text/txt; charset=utf-8');

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";
sleep(1);
$idPais = $_REQUEST["id"];
$ciudades = showCiudades($conexion,$idPais);

while($ciud = $ciudades->fetchObject()){
    $vec[] = $ciud;
    }

    $cad = json_encode($vec);
    echo $cad;
    