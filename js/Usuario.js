var s = document.createElement("script");
s.src = "js/main.js";
document.querySelector("head").appendChild(s);

function registrarUsuario(rango) {
    data = new FormData();
    data.append("correo", document.getElementById('correo').value);
    data.append("contraseña", document.getElementById('contraseña').value);
    data.append("nombre", document.getElementById('nombre').value);
    data.append("apaterno", document.getElementById('apaterno').value);
    data.append("amaterno", document.getElementById('amaterno').value);
    data.append("sexo", document.getElementById('sexo').selectedIndex);
    data.append("rango", rango);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert("No se pudo agregar el registro.");
            }
            else {
                alert("Se agregó el registro correctamente.");
                window.location.href = "gestionAdmin.html";
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'registrarUsuario.php', true);
    xmlhttp.send(data);
}
function eliminarUsuario(id) {
    data = new FormData();
    data.append("id_usuario", id);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert("No se pudo eliminar el registro.");
            }
            else {
                alert("Se eliminó el registro correctamente.");
                window.location.href = "gestionAdmin.html"
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'eliminarUsuario.php', true);
    xmlhttp.send(data);
}

function modificarUsuario(id) {
    localStorage.setItem("usuarioModificar", id);
    window.location.href = "modificarUsuario.html"
}

function buscarUsuario(){
    var idUsuario = localStorage.getItem("usuarioModificar");
    data = new FormData();
    data.append("id_usuario", idUsuario);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert('Ocurrió un problema al cargar el usuario');
            }
            else {
                cargarUsuario(JSON.parse(this.responseText));
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'buscarUsuario.php', true);
    xmlhttp.send(data);
}
function cargarUsuario(usuario){
    document.getElementById('nombre').value = usuario.nombre;
    document.getElementById('apaterno').value = usuario.apaterno;
    document.getElementById('amaterno').value = usuario.amaterno;
    document.getElementById('correo').value = usuario.correo;
    document.getElementById('contraseña').value = usuario.password;
    document.getElementById('sexo').selectedIndex = usuario.sexo;
    document.getElementById('rango').selectedIndex = usuario.rango;
}


function actualizarDatosUsuario(){
    data = new FormData();
    data.append("id_usuario", localStorage.getItem('usuarioModificar'));
    data.append("correo", document.getElementById('correo').value);
    data.append("contraseña", document.getElementById('contraseña').value);
    data.append("nombre", document.getElementById('nombre').value);
    data.append("apaterno", document.getElementById('apaterno').value);
    data.append("amaterno", document.getElementById('amaterno').value);
    data.append("sexo", document.getElementById('sexo').selectedIndex);
    data.append("rango", document.getElementById('rango').selectedIndex);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == "0") {
                alert("No se pudo actualizar el registro.");
            }
            else {
                alert("Se actualizó el registro correctamente.");
                localStorage.removeItem('usuarioModificar');
                window.location.href = "gestionAdmin.html"
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'ModificarUsuario.php', true);
    xmlhttp.send(data);
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
                    html += `<div style="margin-top: 10px;" class="administrador">${element.nombre}<br> 
                     ${element.correo}<div style="float: right;" class="botones"><button 
                    class="btn-contact modificar" onclick="eliminarUsuario('${element.id_usuario}')"> 
                    Eliminar </button><button class="btn-contact eliminar" onclick="modificarUsuario('${element.id_usuario}')">
                    Modificar</button></div></div>`;
                });


                document.getElementById('administradores').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("GET", HOST + 'mostrarUsuarios.php', true);
    xmlhttp.send();
}

function enviarComentario(){
    data = new FormData();
    var usuario = JSON.parse(localStorage.getItem("sesion")).id_usuario;
    var mensaje = document.getElementById('comentarioMensaje').value;

    data.append('id_usuario', usuario);
    data.append('comentario', mensaje);


    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert("No se pudo agregar el comentario.");
            }
            else {
                alert("Se agregó el comentario correctamente.");
                window.location.href = "comentariosUsuario.html";
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'registrarComentario.php', true);
    xmlhttp.send(data);

}

function mostrarComentarios(usuario) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert("No se puede mostrar el contenido.");
            }
            else {

                var obj = JSON.parse(this.responseText);
                var idUsuario = JSON.parse(localStorage.getItem("sesion")).id_usuario;

                var html = "";

                obj.forEach(element => {
                    console.log(": " +  element.usuario + ", " + idUsuario);
                    if(!usuario ||  element.usuario == idUsuario)
                    {
                        html += `<div style="margin-top: 10px;" class="administrador">Comentario: ${element.comentario}<br> 
                        Respuesta: ${element.respuesta}</div>`;
                        if(!usuario && element.estado == 0)
                        {
                            html += `<div>
                            <textarea id="respuesta${element.id}" cols="30" rows="5" class="form-control" placeholder="Respuesta"></textarea>
                            <button onclick="enviarRespuesta(${element.id})" class="btn-contact">Enviar</button>
                            </div>`
                        }
                    }

                });


                document.getElementById('comentarios').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'mostrarComentarios.php', true);
    xmlhttp.send();
}

function enviarRespuesta(idComentario){
    data = new FormData();
    data.append('respuesta', document.getElementById('respuesta' + idComentario).value)
    data.append('comentario', idComentario);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert("No se pudo agregar la respuesta.");
            }
            else {
                alert("Se agregó la respuesta correctamente.");
                window.location.href = "comentariosAdministrador.html";
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'registrarRespuesta.php', true);
    xmlhttp.send(data);

}




