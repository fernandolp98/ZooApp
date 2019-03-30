<?php
$id=$_POST['id'];

include('conexionBD.php');

if(Conectar())
{
    $query = "DELETE FROM animal WHERE usuario = '$id'";

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