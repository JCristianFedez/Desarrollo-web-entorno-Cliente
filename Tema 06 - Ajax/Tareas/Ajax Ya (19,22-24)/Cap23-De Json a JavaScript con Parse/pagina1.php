<?php
sleep(4);
header('Content-Type: text/txt; charset=utf-8');

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";

$fullConsulta = showAll($conexion,"perifericos");

while($propiedad = $fullConsulta->fetchObject()){
$vec[] = $propiedad;
}

$cad = json_encode($vec);
echo $cad;