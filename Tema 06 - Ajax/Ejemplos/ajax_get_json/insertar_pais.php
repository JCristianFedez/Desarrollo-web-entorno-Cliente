<?php 

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";


$nombre = $_REQUEST["nombre"];

insertPais($conexion,$nombre);
?>