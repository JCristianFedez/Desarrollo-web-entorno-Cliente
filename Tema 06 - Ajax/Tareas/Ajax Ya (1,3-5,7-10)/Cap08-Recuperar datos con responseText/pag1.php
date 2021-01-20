<?php 
header("Content-Type: text/html; charset=utf-8");

$caracterAux="X";
$respuesta="Estos comentarios corresponden a la fecha";
$ok=true;

switch($_REQUEST["fecha"]){
    case "21/01/2016":
        $respuesta.=" 21/01/2016";
        $caracterAux="X";
        break;
    case "22/01/2016":
        $respuesta.=" 22/01/2016";
        $caracterAux="Y";
        break;
    case "23/01/2016":
        $respuesta.=" 23/01/2016";
        $caracterAux="Z";
        break;
    default:
    $respuesta="Fecha invalida";
    $ok=false;
}


if($ok){
    $respuesta.="<br>";
    for ($i=0; $i < 6; $i++) { 
        for ($j=0; $j < 30; $j++) { 
            $respuesta.=$caracterAux;
        }
    $respuesta.="<br>";
    }
}


echo $respuesta;
?>