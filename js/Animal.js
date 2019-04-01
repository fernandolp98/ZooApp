var s = document.createElement("script");
s.src = "js/main.js";
document.querySelector("head").appendChild(s);

function registraAnimal() {
    data = new FormData();
    data.append("nombre", document.getElementById('nombre').value);
    data.append("nombre_cientifico", document.getElementById('nombre_cientifico').value);
    data.append("clase", document.getElementById('clase').value);
    data.append("orden", document.getElementById('orden').value);
    data.append("habitad", document.getElementById('habitad').value);
    data.append("descripcion", document.getElementById('descripcion').value);
    data.append("existencia", document.getElementById('existencia').value);
    data.append("zona", document.getElementById('zona').value);
    data.append("imagen", document.getElementById('imagenAnimal').getAttribute('src'));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == "0") {
                alert("No se pudo agregar el registro.");
            }
            else {
                alert("Se agregó el registro correctamente.");
                window.location.href = "gestionAnimal.html"
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'registrarAnimal.php', true);
    xmlhttp.send(data);
}
function cargarImagenAnimal() {
    element = document.getElementById('imagen');
    var file = element.files[0];
    var render = new FileReader();
    render.onload = function () {
        document.getElementById('imagenAnimal').setAttribute('src', render.result);
    }
    render.readAsDataURL(file);
}
function eliminarAnimal(id) {
    data = new FormData();
    data.append("id", id);


    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == "0") {
                alert("No se pudo eliminar el registro.");
            }
            else {
                alert("Se eliminò el registro correctamente.");
                window.location.href = "gestionAnimal.html"
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'EliminarAnimal.php', true);
    xmlhttp.send(data);
}

function mostrarAnimales() {
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
                    html += "<div class=\"card paquete\"><div class=\"card-hero paq\"><img src=\"" + element.imagen + "\"><a onclick=\"infoAnimal('" + element.id_animal + "')\"class=\"btn-card-show\">Ver mas</a></div><div class=\"card-body\"><h3 class=\"card-title\">" + element.nombre + "</h3></div></div>";
                });
                document.getElementById('animales').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("GET", HOST + 'mostrarAnimales.php', true);
    xmlhttp.send();
}
function mostrarAnimalesGestion() {
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
                    html += "<div style=\"margin-top: 10px;\" class=\"administrador\">" + element.nombre + "<br>" + element.nombre_cientifico + "<div style=\"float: right;\" class=\"botones\"><button class=\"btn-contact modificar\" onclick=\"eliminarAnimal('" + element.id_animal + "')\"> Eliminar </button><button class=\"btn-contact eliminar\" onclick=\"modificarAnimal('" + element.id_animal + "')\"> Modificar </button></div></div>";
                });


                document.getElementById('animales').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("GET", HOST + 'mostrarAnimales.php', true);
    xmlhttp.send();
}
function modificarAnimal(id) {
    localStorage.setItem("animal", id);
    window.location.href = "modificarAnimal.html"
}
function buscarAnimal(opcion) {
    var idAnimal = localStorage.getItem("animal");
    data = new FormData();
    data.append("id_animal", idAnimal);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert('Ocurrió un problema al cargar el usuario');
            }
            else {
                if (opcion == 1)
                    cargarAnimal(JSON.parse(this.responseText));
                if (opcion == 2)
                    cargarInfoAnimal(JSON.parse(this.responseText));
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'buscarAnimal.php', true);
    xmlhttp.send(data);
}
function cargarAnimal(animal) {
    document.getElementById('nombre').value = animal.nombre;
    document.getElementById('nombre_cientifico').value = animal.nombre_cientifico;
    document.getElementById('clase').value = animal.clase;
    document.getElementById('orden').value = animal.orden;
    document.getElementById('habitad').value = animal.habitad;
    document.getElementById('descripcion').value = animal.descripcion;
    document.getElementById('existencia').value = animal.existencia;
    document.getElementById('zona').value = animal.zona;
    document.getElementById('imagenAnimal').setAttribute('src', animal.imagen);
}

function actualizarDatosAnimal() {
    data = new FormData();
    data.append("id_animal", localStorage.getItem('animal'));
    data.append("nombre", document.getElementById('nombre').value);
    data.append("nombre_cientifico", document.getElementById('nombre_cientifico').value);
    data.append("clase", document.getElementById('clase').value);
    data.append("orden", document.getElementById('orden').value);
    data.append("habitad", document.getElementById('habitad').value);
    data.append("descripcion", document.getElementById('descripcion').value);
    data.append("existencia", document.getElementById('existencia').value);
    data.append("zona", document.getElementById('zona').value);
    data.append("imagen", document.getElementById('imagenAnimal').getAttribute('src'));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == "0") {
                alert("No se pudo actualizar el registro.");
            }
            else {
                alert("Se actualizó el registro correctamente.");
                window.location.href = "gestionAnimal.html"
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'modificarAnimal.php', true);
    xmlhttp.send(data);
}

function infoAnimal(id) {
    localStorage.setItem('animal', id);
    window.location.href = "infoAnimal.html"

}
function cargarInfoAnimal(animal) {
    document.getElementById('nombre').innerHTML = animal.nombre;
    document.getElementById('nombre_cientifico').innerHTML = animal.nombre_cientifico;
    document.getElementById('clase').innerHTML = animal.clase;
    document.getElementById('orden').innerHTML = animal.orden;
    document.getElementById('habitad').innerHTML = animal.habitad;
    document.getElementById('descripcion').innerHTML = animal.descripcion;
    document.getElementById('existencia').innerHTML = animal.existencia;
    document.getElementById('zona').innerHTML = animal.zona;
    document.getElementById('imagenAnimal').setAttribute('src', animal.imagen);

}
function eliminarDatos() {
    localStorage.removeItem('animal');

}

function actualizaSelectZonas() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert("No se puede mostrar el contenido.");
            }
            else {

                var obj = JSON.parse(this.responseText);

                var html = document.getElementById('zona').innerHTML;
                obj.forEach(element => {
                    html += "<option value=\"" + element.nombre + "\">" + element.nombre + "</option>";
                });


                document.getElementById('zona').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("GET", HOST + 'mostrarZonas.php', true);
    xmlhttp.send();
}

function filtrarAnimales(value) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                document.getElementById('animales').innerHTML = "";

            }
            else {
                var obj = JSON.parse(this.responseText);
                var html = "";
                obj.forEach(element => {
                    html += "<div class=\"card paquete\"><div class=\"card-hero paq\"><img src=\"" + element.imagen + "\"><a onclick=\"infoAnimal('" + element.id_animal + "')\"class=\"btn-card-show\">Ver mas</a></div><div class=\"card-body\"><h3 class=\"card-title\">" + element.nombre + "</h3></div></div>";
                });
                document.getElementById('animales').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    if (value != "showAll") {
        data = new FormData();
        data.append("zona", value);
        xmlhttp.open("POST", HOST + 'mostrarAnimalesFiltrado.php', true);
        xmlhttp.send(data);
        document.getElementById('nombrezona').innerHTML = value;

    }
    else {
        xmlhttp.open("GET", HOST + 'mostrarAnimales.php', true);
        xmlhttp.send();
    }
}