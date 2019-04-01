<?php
$id_zona=$_POST['id_zona'];

include('conexionBD.php');

if(Conectar())
{
    $query = "DELETE FROM zona WHERE id_zona = '$id_zona'";

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