<?php
header('Content-Type: text/txt; charset=utf-8');

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";

$todosLosPaises = showAllPaises($conexion);


while($pais = $todosLosPaises->fetchObject()){
    $vec[] = $pais;
    }

    $cad = json_encode($vec);
    echo $cad;
    