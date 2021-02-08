<?php
header('Content-Type: application/json');
$nombre='';
$apellido='';
$direccion='';
if ($_REQUEST['dni']=='1')
{
  $nombre='Juan';
  $apellido='Rodriguez';
  $direccion='Colon 123';
}
if ($_REQUEST['dni']=='2')
{
  $nombre='Ana';
  $apellido='Maldonado';
  $direccion='Lima 245';
}
if ($_REQUEST['dni']=='3')
{
  $nombre='laura';
  $apellido='Pueyrredon';
  $direccion='Laprida 785';
}
echo json_encode(['nombre'=>$nombre,'apellido'=>$apellido,'direccion'=>$direccion]);
?>