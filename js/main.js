var HOST = "php/";

function validaSesion(privilegios) {
    var sesion = JSON.parse(localStorage.getItem("sesion"));
    if (sesion != null) {
        var rango = sesion.rango;
        if(rango != privilegios && privilegios == 0){
            alert('No tienes privilegios para aceder a esta seccion');
            window.location.href = "index.html";
        }
        else{
           actualizaMenu(rango);
        }
    }
    else if(privilegios == 2) {
        actualizaMenu(privilegios);
    }
    else{
        window.location.href = 'index.html';
    }
}

function actualizaMenu(rango) {

    var element = document.getElementById("menu");
    if (rango == 1) {
        element.innerHTML = "<ul><li><a href=\"index.html\">Inicio</a></li><li><a href=\"animales.html\">Animales</a></li><li><a href=\"galeria.html\">Galeria</a></li><li><a href=\"paquetes.html\">Paquetes</a></li><li><a href=\"horarios.html\">Horarios</a></li><li><a href=\"contacto.html\">Contacto</a></li></ul>";
        document.getElementById("linkSesion").setAttribute('title', "Cerrar Sesión");
        document.getElementById("linkSesion").setAttribute('onclick', "cerrarSesion()");

        document.getElementById("iconoSesion").setAttribute('class', "fas fa-sign-out-alt");


    } else if (rango == 0) {

        element.innerHTML = "<ul><li><a href=\"index.html\">Inicio</a></li><li><a href=\"animales.html\">Animales</a></li><li><a href=\"galeria.html\">Galeria</a></li><li><a href=\"configuración.html\">Configuración</a></li><li><a href=\"paquetes.html\">Paquetes</a></li><li><a href=\"horarios.html\">Horarios</a></li><li><a href=\"contacto.html\">Contacto</a></li></ul>";
        document.getElementById("linkSesion").setAttribute('title', "Cerrar Sesión");
        document.getElementById("linkSesion").setAttribute('onclick', "cerrarSesion()");
        document.getElementById("iconoSesion").setAttribute('class', "fas fa-sign-out-alt");

    } else if(rango == 2){
        
        element.innerHTML = "<ul><li><a href=\"index.html\">Inicio</a></li><li><li><a href=\"galeria.html\">Galeria</a></li><li><a href=\"paquetes.html\">Paquetes</a></li><li><a href=\"horarios.html\">Horarios</a></li><li><a href=\"contacto.html\">Contacto</a></li></ul  >";
        document.getElementById("linkSesion").setAttribute('title', "Iniciar Sesión");
        

        var element = document.getElementById('social');
        element.innerHTML = "<a title=\"Registrarse\" id=\"registro\" href=\"registro.html\"><i class=\"fas fa-user-plus\"></i></a>" + element.innerHTML;
    }
}
function cerrarSesion(){
    window.localStorage.removeItem('sesion');
}