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