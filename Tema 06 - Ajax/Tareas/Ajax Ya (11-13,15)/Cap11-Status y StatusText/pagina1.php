<?php

header('Content-Type: text/html; charset=utf-8');
$cuadrado = pow($_REQUEST["numero"],2);
echo $cuadrado;