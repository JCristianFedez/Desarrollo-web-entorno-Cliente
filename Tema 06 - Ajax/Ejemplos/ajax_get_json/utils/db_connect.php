<?php 
$dsn = "mysql:host=localhost;dbname=ejemplos_ajax";
$username = "root";
$password = "";
$options = [PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'];

try{
    $conexion = new PDO($dsn,$username,$password,$options);
}catch (PDOException $e){
    echo "<h3>Ups no se ha podido conectar con el servidor</h3>";
    die("Error: ".$e->getMessage());
}
?>