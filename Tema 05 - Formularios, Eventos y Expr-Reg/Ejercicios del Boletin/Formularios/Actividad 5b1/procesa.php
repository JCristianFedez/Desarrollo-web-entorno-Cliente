<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procesa.php</title>
</head>
<body>
    <ul>
        <li>Nombre: <?=$_REQUEST["nombre"];?></li>
        <li>Sexo: <?=$_REQUEST["sexo"];?></li>
        <li>Altura: <?=$_REQUEST["altura"]." cm";?></li>
        <li>Fecha nac: <?=$_REQUEST["fecha_nacimiento"];?></li>
        <?php 
        if($_REQUEST["semana_preferente"]){
        echo "<li>Semana: ".$_REQUEST['semana_preferente']."</li>";
        }

        if(isset($_REQUEST["fumador"])){
            echo "<li>Fumador: SI</li>";
            echo "<li>Cigarillos:".$_REQUEST["cant_cigarros"]." cigarillos al dia</li>";
        }else{
            echo "<li>Fumador: NO</li>";
        }
        if($_REQUEST["observaciones"]){
            echo "<li>Observaciones: ".$_REQUEST["observaciones"]."</li>";
        }
        ?>
    </ul>
</body>
</html>