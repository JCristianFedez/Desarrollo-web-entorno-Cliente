<?php
sleep(2);
$car = $_REQUEST["cod"];

switch($car){
    case 1:
        $materias=['Programacion I','Analisis Matematico','Estructura de las Organizaciones','Etica Profesional'];
        break;

    case 2:
        $materias=['Fundamentos de Fisica','Analisis Matematico 1','Ingles Tecnico I','Sistemas de Comunicaciones I'];
        break;

    case 3:
        $materias=['Informatica I','Multimedia I','Bases de Datos'];
        break;
}

$xml = "<?xml version=\"1.0\"?>\n";
$xml .= "<materias>\n";
for ($i=0; $i < count($materias); $i++) { 
    $xml.="<materia>".$materias[$i]."</materia>\n";
}
$xml.="</materias>\n";
header('Content-Type: text/xml');
echo $xml;