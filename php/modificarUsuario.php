<?php
$id_usuario=$_POST['id_usuario'];
$correo=$_POST['correo'];
$contraseña=$_POST['contraseña'];
$nombre=$_POST['nombre'];
$apaterno=$_POST['apaterno'];
$amaterno=$_POST['amaterno'];
$sexo=$_POST['sexo'];
$rango=$_POST['rango'];

include('conexionBD.php');

if(Conectar())
{
    $query = "UPDATE usuario SET correo = '$correo', password='$contraseña', nombre='$nombre', apaterno='$apaterno', amaterno='$amaterno', sexo=$sexo, rango=$rango WHERE id_usuario = $id_usuario";

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