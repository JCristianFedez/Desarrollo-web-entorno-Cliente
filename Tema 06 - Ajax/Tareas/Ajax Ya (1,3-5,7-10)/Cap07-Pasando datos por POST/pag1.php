<?php 
header("Content-Type: text/html; charset=utf-8");
$nombre=$_REQUEST["nombre"];
$comentarios=$_REQUEST["comentarios"];

$archivo="comentarios.txt";
$ar = fopen($archivo,"a") or
    die("No se pudo abrir el archivo");

fputs($ar,"Nombre: $nombre \n");
fputs($ar,"Comentarios: $comentarios \n\n");
fclose($ar);


?>
