<?php
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
    $query = "INSERT INTO usuario (correo, password, nombre, apaterno, amaterno, sexo, rango) VALUES
    ('$correo','$contraseña','$nombre','$apaterno','$amaterno', $sexo, $rango)";

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