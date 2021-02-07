<?php

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";
sleep(1);
$idPais = $_REQUEST["id"];
$ciudades = showCiudades($conexion,$idPais);

while($ciud = $ciudades->fetchObject()){
    $vec[] = $ciud;
    }

$xml = "<?xml version=\"1.0\"?>\n";
$xml .= "<ciudades>\n";
foreach ($vec as $key => $value) {
    $xml .= "<ciudad>\n";
    $xml .= "<id>$value->id</id>\n";
    $xml .= "<nombre>$value->nombre</nombre>\n";
    $xml .= "<poblacion>$value->poblacion</poblacion>\n";
    $xml .= "<fecha_creacion>$value->fecha_creacion</fecha_creacion>\n";
    $xml .= "</ciudad>\n";
}
$xml .= "</ciudades>\n";
header("Content-Type: text/xml");
echo $xml;
