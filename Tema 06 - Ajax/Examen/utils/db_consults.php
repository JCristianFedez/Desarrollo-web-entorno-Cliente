<?php 

function showCoches($conexion,$marca){
    if($marca != 0){
        return $conexion->query(
            "SELECT 
                coches.id AS 'id',
                coches.nombre AS 'nombre',
                coches.precio AS 'precio',
                marcas.nombre AS 'marca' 
            FROM 
                coches
            INNER JOIN marcas ON marcas.id = coches.id_marca
            WHERE coches.id_marca='$marca';"
        );
    }else{
        return $conexion->query(
            "SELECT 
                coches.id AS 'id',
                coches.nombre AS 'nombre',
                coches.precio AS 'precio',
                marcas.nombre AS 'marca' 
            FROM 
                coches
            INNER JOIN marcas ON marcas.id = coches.id_marca;"
        );
    }
}

function showMarcas($conexion){
    return $conexion->query(
        "SELECT *
        FROM marcas;"
    );
}