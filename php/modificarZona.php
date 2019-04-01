<?php
$id_zona=$_POST['id_zona'];
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
    $query = "UPDATE zona SET nombre = '$nombre', descripcion = '$descripcion', imagen = '$imagen' WHERE id_zona = $id_zona";

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