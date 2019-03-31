<?php
include("conexionBD.php");

$id_usuario = $_POST['id_usuario'];
//conectar a la base de datos
try{
    Conectar();
    global $conexion;
    $query = "SELECT * FROM usuario WHERE id_usuario = '$id_usuario'";
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