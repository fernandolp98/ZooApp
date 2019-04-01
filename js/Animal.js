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
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'registrarAnimal.php', true);
    xmlhttp.send(data);
}
function cargarImagenAnimal(){
    element = document.getElementById('imagen');
    var file = element.files[0];
    var render = new FileReader();
    render.onload = function () {
        document.getElementById('imagenAnimal').setAttribute('src', render.result);
        console.log(algo)
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
                     html += "<div class=\"administrador\" onclick=\"alert('"+ element.nombre+"')\">";

                    html += "<img src=\""+ element.imagen+"\" alt=\"Avatar\" style=\"border-radius: 50%; height: 50px; width: 50px\">" + element.nombre + "</div><br>";
                });
                document.getElementById('mostrar_animales').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("GET", HOST + 'mostrarAnimales.php', true);
    xmlhttp.send();
}
function mostrarAnimalesGestion(){
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
function modificarAnimal(id){
        localStorage.setItem("animalModificar", id);
        window.location.href = "modificarAnimal.html"
}
function buscarAnimal(){
    var idAnimal = localStorage.getItem("animalModificar");
    data = new FormData();
    data.append("id_animal", idAnimal);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0") {
                alert('Ocurrió un problema al cargar el usuario');
            }
            else {
                cargarAnimal(JSON.parse(this.responseText));
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'buscarAnimal.php', true);
    xmlhttp.send(data);
}
function cargarAnimal(animal){
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

function actualizarDatosAnimal(){
    data = new FormData();
    data.append("id_animal", localStorage.getItem('animalModificar'));
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
                localStorage.removeItem('animalModificar');
                window.location.href = "gestionAnimal.html"
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'modificarAnimal.php', true);
    xmlhttp.send(data);
}