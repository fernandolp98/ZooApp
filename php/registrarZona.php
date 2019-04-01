<?php
$nombre=$_POST['nombre'];
$descripcion=$_POST['$descripcion'];
$imagen=$_POST['imagen'];


include('conexionBD.php');

if(Conectar())
{
    $query = "INSERT INTO zona (nombre, descripcion, imagen, visitas) VALUES
    ('$nombre', '$descripcion', '$imagen', 0)";

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