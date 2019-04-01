<?php
$conexion;
function Conectar(){
    $host = "localhost";
    $user = "root";
    $password = "root";
    $database = "zooapp";
    error_reporting(1);
    global $conexion;
    $conexion = mysqli_connect($host, $user, $password, $database);
    if(!$conexion)
    {
        //echo mysqli_connect_error();
        return false;
    }
    return true;
}
function Desconectar(){
    global $conexion;
    mysqli_close($conexion);
}
function Enviar($query){
    global $conexion;
    $result = mysqli_query($conexion, $query);
    if($result){
        return true;
    }    
    else{
        //echo $conexion->error;
        return false;
    }
}
?>