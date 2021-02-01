<?php

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";
sleep(1);
$comAutonoma = $_REQUEST["cod"];
$provincias = showProvincias($conexion,$comAutonoma);

while($prov = $provincias->fetchObject()){
    $vec[] = $prov;
    }

$xml = "<?xml version=\"1.0\"?>\n";
$xml .= "<provincias>\n";
foreach ($vec as $key => $value) {
    $xml .= "<provincia>\n";
    $xml .= "<id>$value->id</id>\n";
    $xml .= "<nombre>$value->nombre</nombre>\n";
    $xml .= "</provincia>\n";
}
$xml .= "</provincias>\n";
header("Content-Type: text/xml");
echo $xml;
