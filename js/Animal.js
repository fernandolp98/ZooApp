var s = document.createElement("script");
s.src = "js/main.js";
document.querySelector("head").appendChild(s);

function registraAnimal() {
    data = new FormData();
    data.append("nombre", document.getElementById('nuevo_correo').value);
    data.append("nombre_cientifico", document.getElementById('nuevo_nombre_cientifico').value);
    data.append("clase", document.getElementById('nuevo_clase').value);
    data.append("orden", document.getElementById('nuevo_informacion').value);
    data.append("habitad", document.getElementById('nuevo_habitad').value);
    data.append("descripcion", document.getElementById('nuevo_descripcion').value);
    data.append("existencia", document.getElementById('nuevo_existencia').value);
    data.append("zona", document.getElementById('nuevo_zona').value);
    data.append("imagen", document.getElementById('nuevo_imagen').selectedIndex);

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

                var html = "<ul class=\"list\">";
                obj.forEach(element => {
                    html += "<li class=\"list-item list-item--tappable\" onclick=\"alert('" + element.nombre + "')\"><div class=\"list-item__left\"><img class=\"list-item__thumbnail\" src=" + element.imagen + "></div>" +
                        "<div class=\"list-item__center\"><div class=\"list-item__title\">" + element.nombre + "</div>" +
                        "<div class=\"list-item__subtitle\">" + element.nombre_cientifico + "</div></li>";
                });
                html += "</ul>"
                document.getElementById('mostrar_animales').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("GET", HOST + 'mostrarAnimales.php', true);
    xmlhttp.send();
}