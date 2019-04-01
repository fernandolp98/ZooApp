<?php
$id_animal=$_POST['id_animal'];
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
    $query = "UPDATE animal SET nombre = '$nombre', nombre_cientifico = '$nombre_cientifico', clase = '$clase', orden = '$orden', habitad = '$habitad', descripcion = '$descripcion', existencia = '$existencia', zona = '$zona', imagen = '$imagen' WHERE id_animal = $id_animal";

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