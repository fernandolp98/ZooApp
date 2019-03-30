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
function EliminarUsuario(cooreo) {
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
                alert("Se eliminò el registro correctamente.");
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'EliminarUsuario.php', true);
    xmlhttp.send(data);
}