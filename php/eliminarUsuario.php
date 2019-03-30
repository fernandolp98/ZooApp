<?php
$correo=$_POST['correo'];

include('conexionBD.php');

if(Conectar())
{
    $query = "DELETE FROM usuaio WHERE correo = '$correo'";

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