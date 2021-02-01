<?php 
/**
 * SELECT * FROM $table
 */
function showProvincias($conexion,$comAutonoma){
    return $conexion->query(
        "SELECT * 
        FROM provincias 
        WHERE comunidad=$comAutonoma;"
    );
}

function showAllCom($conexion){
    return $conexion->query(
        "SELECT *
        FROM comunidades_autonomas;"
    );
}