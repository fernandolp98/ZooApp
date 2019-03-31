<?php
$id_usuario=$_POST['id_usuario'];

include('conexionBD.php');

if(Conectar())
{
    $query = "DELETE FROM usuario WHERE id_usuario = '$id_usuario'";

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