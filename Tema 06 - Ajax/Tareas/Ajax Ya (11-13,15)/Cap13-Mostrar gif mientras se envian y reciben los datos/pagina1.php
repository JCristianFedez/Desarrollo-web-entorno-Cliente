<?php

header("Content-Type: text/html; charset=utf-8");

$ar = fopen("comentarios.txt","a") or
    die("No se pude abrir el archivo");

fputs($ar,"Nombre: ".$_REQUEST["nombre"].PHP_EOL);
fputs($ar,"Comentarios: ".$_REQUEST["comentarios"].PHP_EOL);
fclose($ar);
sleep(1);
