<?php 
/**
 * SELECT * FROM $table
 */
function showCiudades($conexion,$paisId){
    return $conexion->query(
        "SELECT * 
        FROM ciudad 
        WHERE id_pais=$paisId
        ORDER BY fecha_creacion DESC;"
    );
}

function getCiudadById($conexion,$idCiudad){
    return $conexion->query(
        "SELECT * 
        FROM ciudad 
        WHERE id=$idCiudad;"
    );
}

function showAllPaises($conexion){
    return $conexion->query(
        "SELECT *
        FROM pais;"
    );
}

function insertPais($conexion,$nombre){
    $querry = "INSERT INTO pais (nombre) VALUES ('$nombre')";
    $conexion->exec($querry);
}

function insertCiudad($conexion,$nombre,$poblacion,$fecaCreacion,$idPais){
    $querry = 
    "INSERT INTO ciudad (nombre,poblacion,fecha_creacion,id_pais) 
    VALUES ('$nombre','$poblacion','$fecaCreacion','$idPais')";
    $conexion->exec($querry);
}