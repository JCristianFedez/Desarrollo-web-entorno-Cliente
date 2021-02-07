<?php

require_once "utils/db_consults.php";
require_once "utils/db_connect.php";
sleep(1);
$idCiudad = $_REQUEST["id"];
$ciudad = getCiudadById($conexion,$idCiudad)->fetchObject();


$xml = "<?xml version=\"1.0\"?>\n";
$xml .= "<ciudad>\n";
$xml .= "<id>$ciudad->id</id>\n";
$xml .= "<nombre>$ciudad->nombre</nombre>\n";
$xml .= "<poblacion>$ciudad->poblacion</poblacion>\n";
$xml .= "<fecha_creacion>$ciudad->fecha_creacion</fecha_creacion>\n";
$xml .= "</ciudad>\n";
header("Content-Type: text/xml");
echo $xml;
