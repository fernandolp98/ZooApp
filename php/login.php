<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
include("conexionBD.php");

//recibimos datos
$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];
//conectar a la base de datos
try{
    conectar();
    global $conexion;
    $query = "SELECT * FROM usuario WHERE correo = '$correo' AND password = '$contraseña'";
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
        //echo $conexion->error;

        echo "0";
    }

} catch(Exception $e)
{
    echo $e;
}
Desconectar();

?>