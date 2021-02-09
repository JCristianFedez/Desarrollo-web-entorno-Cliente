<?php

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";

$todasMarcas = showMarcas($conexion);

while($marca = $todasMarcas->fetchObject()){
    $vec[] = $marca;
    }

$xml = "<?xml version=\"1.0\"?>\n";
$xml .= "<marcas>\n";
foreach ($vec as $key => $value) {
    $xml .= "<marca>\n";
    $xml .= "<id>$value->id</id>\n";
    $xml .= "<nombre>$value->nombre</nombre>\n";
    $xml .= "</marca>\n";
}
$xml .= "</marcas>\n";
header("Content-Type: text/xml");
echo $xml;
