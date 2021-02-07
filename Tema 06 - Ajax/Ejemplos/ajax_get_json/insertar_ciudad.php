<?php 

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";


$nombre = $_REQUEST["nombre"];
$poblacion = $_REQUEST["poblacion"];
$fechaCreacion = date('Y-m-d', strtotime($_REQUEST["fecha"]));
$idPais = $_REQUEST["idPais"];

insertCiudad($conexion,$nombre,$poblacion,$fechaCreacion,$idPais);
?>