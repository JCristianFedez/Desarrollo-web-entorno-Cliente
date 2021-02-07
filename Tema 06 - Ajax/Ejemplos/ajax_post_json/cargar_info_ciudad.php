<?php
header('Content-Type: text/txt; charset=utf-8');

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";
sleep(1);
$idCiudad = $_REQUEST["id"];
$ciudad = getCiudadById($conexion,$idCiudad)->fetchObject();


$cad = json_encode($ciudad);
echo $cad;
