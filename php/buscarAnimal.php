<?php
include("conexionBD.php");

$id_animal = $_POST['id_animal'];
//conectar a la base de datos
try{
    Conectar();
    global $conexion;
    $query = "SELECT * FROM animal WHERE id_animal = '$id_animal'";
    $result = mysqli_query($conexion, $query);
    $array = array();
    if(mysqli_num_rows($result) > 0)
    {
        while($row = mysqli_fetch_assoc($result)){
            $array = $row;
        }
        echo json_encode($array);
    }
    else
    {
        echo "0";
    }

} catch(Exception $e)
{
    echo $e;
}
Desconectar();
?>