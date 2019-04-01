var s = document.createElement("script");
s.src = "js/main.js";
document.querySelector("head").appendChild(s);

function registrarZona() {
    data = new FormData();
    data.append("nombre", document.getElementById('nombre').value);
    data.append("descripcion", document.getElementById('descripcion').value);
    data.append("imagen", document.getElementById('imagenZona').getAttribute('src'));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert("No se pudo agregar el registro.");
            }
            else {
                alert("Se agregó el registro correctamente.");
                window.location.href = "gestionZona.html"

            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'registrarZona.php', true);
    xmlhttp.send(data);
}
function eliminarZona(id) {
    data = new FormData();
    data.append("id_zona", id);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert("No se pudo eliminar el registro.");
            }
            else {
                alert("Se eliminó el registro correctamente.");
                window.location.href = "gestionZona.html"
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'eliminarZona.php', true);
    xmlhttp.send(data);
}

function modificarZona(id) {
    localStorage.setItem("zona", id);
    window.location.href = "modificarZona.html"
}

function buscarZona() {
    var idZona = localStorage.getItem("zona");
    data = new FormData();
    data.append("id_zona", idZona);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert('Ocurrió un problema al cargar el usuario');
            }
            else {
                    cargarZona(JSON.parse(this.responseText));
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'buscarZona.php', true);
    xmlhttp.send(data);
}
function buscarZonaNombre() {
    var nombre = localStorage.getItem("zona");
    data = new FormData();
    data.append("nombre", nombre);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert('Ocurrió un problema al cargar la zona');
            }
            else {
                cargarInfoZona(JSON.parse(this.responseText));
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'buscarZonaNombre.php', true);
    xmlhttp.send(data);
}

function cargarZona(zona) {
    document.getElementById('nombre').value = zona.nombre;
    document.getElementById('descripcion').value = zona.descripcion;
    document.getElementById('imagenZona').setAttribute('src', zona.imagen);
}


function actualizarDatosZona() {
    data = new FormData();
    data.append("id_zona", localStorage.getItem('zona'));
    data.append("nombre", document.getElementById('nombre').value);
    data.append("descripcion", document.getElementById('descripcion').value);
    data.append("imagen", document.getElementById('imagenZona').getAttribute('src'));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == "0") {
                alert("No se pudo actualizar el registro.");
            }
            else {
                alert("Se actualizó el registro correctamente.");
                localStorage.removeItem('zonaModificar');
                window.location.href = "gestionZona.html"
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'ModificarZona.php', true);
    xmlhttp.send(data);
}




function mostrarZonas() {
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
                    html += "<div style=\"margin-top: 10px;\" class=\"administrador\">" + element.id_zona + "<br>" + element.nombre + "<div style=\"float: right;\" class=\"botones\"><button class=\"btn-contact modificar\" onclick=\"eliminarZona('" + element.id_zona + "')\"> Eliminar </button><button class=\"btn-contact eliminar\" onclick=\"modificarZona('" + element.id_zona + "')\"> Modificar </button></div></div>";
                });


                document.getElementById('zonas').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("GET", HOST + 'mostrarZonas.php', true);
    xmlhttp.send();
}

function infoZona() {
    localStorage.setItem('zona', document.getElementById('nombrezona').innerHTML);
    window.location.href = "infoZona.html";

}
function cargarInfoZona(zona) {
    document.getElementById('nombre').innerHTML = zona.nombre;
    document.getElementById('descripcion').innerHTML = zona.descripcion;
    document.getElementById('imagenZona').setAttribute('src', zona.imagen);

}

function cargarImagenZona() {
    element = document.getElementById('imagen');
    var file = element.files[0];
    var render = new FileReader();
    render.onload = function () {
        document.getElementById('imagenZona').setAttribute('src', render.result);
        console.log(algo)
    }
    render.readAsDataURL(file);
}
function eliminarDatos() {
    localStorage.removeItem('zona');

}