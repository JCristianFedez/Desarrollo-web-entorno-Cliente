<?php
require_once "utils/db_consults.php";
require_once "utils/db_connect.php";

$todosLosPaises = showAllPaises($conexion);


while($pais = $todosLosPaises->fetchObject()){
    $vec[] = $pais;
    }

$xml = "<?xml version=\"1.0\"?>\n";
$xml .= "<paises>\n";
foreach ($vec as $key => $value) {
    $xml .= "<pais>\n";
    $xml .= "<id>$value->id</id>\n";
    $xml .= "<nombre>$value->nombre</nombre>\n";
    $xml .= "</pais>\n";
}
$xml .= "</paises>\n";
header("Content-Type: text/xml");
echo $xml;
