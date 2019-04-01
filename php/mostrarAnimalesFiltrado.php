<?php
include("conexionBD.php");
$zona = $_POST['zona'];

//conectar a la base de datos
try{
    Conectar();
    global $conexion;
    $query = "SELECT * FROM animal WHERE zona = '$zona'";
    $result = mysqli_query($conexion, $query);
    $array = array();
    if(mysqli_num_rows($result) > 0)
    {
        while($row = mysqli_fetch_array($result)){
            array_push($array, $row);
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