var s = document.createElement("script");
s.src = "js/main.js";
document.querySelector("head").appendChild(s);

function registrarUsuario() {
    data = new FormData();
    data.append("correo", document.getElementById('nuevo_correo').value);
    data.append("contraseña", document.getElementById('nuevo_contraseña').value);
    data.append("nombre", document.getElementById('nuevo_nombre').value);
    data.append("apaterno", document.getElementById('nuevo_apaterno').value);
    data.append("amaterno", document.getElementById('nuevo_amaterno').value);
    data.append("sexo", document.getElementById('nuevo_sexo').selectedIndex);
    data.append("rango", 1);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == "0") {
                alert("No se pudo agregar el registro.");
            }
            else {
                alert("Se agregó el registro correctamente.");
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'registrarUsuario.php', true);
    xmlhttp.send(data);
}
function eliminarUsuario(correo) {
    data = new FormData();
    data.append("correo", correo);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == "0") {
                alert("No se pudo eliminar el registro.");
            }
            else {
                alert("Se eliminó el registro correctamente.");
                mostrarUsuarios();
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'eliminarUsuario.php', true);
    xmlhttp.send(data);
}

function modificarUsuario(correo) {
    data = new FormData();
    data.append("correo", correo);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == "0") {
                alert("No se pudo eliminar el registro.");
            }
            else {
                alert("Se eliminó el registro correctamente.");
                mostrarUsuarios();
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'eliminarUsuario.php', true);
    xmlhttp.send(data);
}

function actualizarDatosUsuario(){


}

function mostrarUsuarios() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert("No se puede mostrar el contenido.");
            }
            else {

                var obj = JSON.parse(this.responseText);

                var html = "";
                obj.forEach(element => {
                    html += "<div style=\"margin-top: 10px;\" class=\"administrador\">" + element.nombre + "<br>" + element.correo + "<div style=\"float: right;\" class=\"botones\"><button class=\"btn-contact modificar\" onclick=\"eliminarUsuario('" + element.correo + "')\"> Eliminar </button><button class=\"btn-contact eliminar\" onclick=\"modificarUsuario(" + element.correo + ")\"> Modificar </button></div></div>";
                });


                document.getElementById('administradores').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("GET", HOST + 'mostrarUsuarios.php', true);
    xmlhttp.send();
}


