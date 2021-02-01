<?php
header('Content-Type: text/txt; charset=utf-8');

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";

$todasLasComunidades = showAllCom($conexion);

while($comunidad = $todasLasComunidades->fetchObject()){
    $vec[] = $comunidad;
    }

$cad = json_encode($vec);
echo $cad;
