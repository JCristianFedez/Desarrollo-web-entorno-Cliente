<?php 
/**
 * SELECT * FROM $table
 */
function showAll($conexion,$table){
    return $conexion->query("SELECT * FROM $table;");
}
?>