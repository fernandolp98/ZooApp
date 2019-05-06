<?php
$id=$_POST['comentario'];
$respuesta=$_POST['respuesta'];

include('conexionBD.php');

if(Conectar())
{
    $query = "UPDATE comentarios SET respuesta = '$respuesta', estado = 1 WHERE id = $id";

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