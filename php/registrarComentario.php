<?php
$id_usuario=$_POST['id_usuario'];
$comentario=$_POST['comentario'];

include('conexionBD.php');

if(Conectar())
{
    $query = "INSERT INTO comentarios (usuario, comentario) VALUES
    ('$id_usuario', '$comentario')";

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