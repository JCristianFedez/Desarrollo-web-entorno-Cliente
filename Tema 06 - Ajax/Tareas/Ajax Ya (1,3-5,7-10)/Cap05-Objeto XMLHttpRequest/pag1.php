<?php 
header("Content-Type: text/html; charset=utf-8");
$nombre=$_REQUEST["nombre"];
$puntuaje=$_REQUEST["puntuaje"];
$archivo="puntuaje.txt";

$ar=fopen($archivo,"a") or
    die("No se pudo abrir el archivo");
fputs($ar,"Nombre:".$nombre."<br>");
fputs($ar,"Voto:".$puntuaje."<br><br>");
fclose($ar);


$ar=fopen($archivo,"r") or
    die("No se pudo abrir el archivo");

while (!feof($ar)){
    $linea=fgets($ar);
    echo $linea;
}

fclose($ar);

?>