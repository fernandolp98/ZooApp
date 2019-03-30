<?php
$nombre=$_POST['nombre'];
$nombre_cientifico=$_POST['nombre_cientifico'];
$clase=$_POST['clase'];
$orden=$_POST['orden'];
$habitad=$_POST['habitad'];
$descripcion=$_POST['descripcion'];
$existencia=$_POST['existencia'];
$zona=$_POST['zona'];
$imagen=$_POST['imagen'];


include('conexionBD.php');

if(Conectar())
{
    $query = "INSERT INTO animal (nombre, nombre_cientifico, clase, orden, habitad, descripcion, existencia, zona, imagen) VALUES
    ('$nombre', '$nombre_cientifico', '$clase', '$orden', '$habitad', '$descripcion', '$existencia', '$zona', '$imagen')";

    if(Enviar($query))
    {
        echo "1";
    }
    else
    {
        echo "0";
    }
    Desconectar();
}
?>