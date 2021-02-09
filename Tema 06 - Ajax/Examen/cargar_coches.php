<?php
sleep(1);
header('Content-Type: text/txt; charset=utf-8');

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";

$marca = $_REQUEST["marca"];

$cochesDeMarca = showCoches($conexion,$marca);


while($marca = $cochesDeMarca->fetchObject()){
    $vec[] = $marca;
    }

$cad = json_encode($vec);
echo $cad;
