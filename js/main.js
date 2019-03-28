
var HOST = "php/";
function login() {
    data = new FormData();
    data.append("correo", document.getElementById('login_correo').value);
    data.append("contraseña", document.getElementById('login_contraseña').value);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == "0") {
                alert("Los datos son incorrectos");
            }
            else {
                sessionStorage.setItem("sesion", this.responseText);
                var obj = JSON.parse(this.responseText);
                if (obj.rango == 1) {
                    window.location.href = "index.html";

                }
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'login.php', true);
    xmlhttp.send(data);
}

function sesionUsuario() {
    var str = sessionStorage.getItem("sesion");
    if (str != null) {
        str = JSON.parse(str);
        alert(str.nombre);
    }
    else {
        window.location.href = "login.html";
    }
}

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
                        "<div class=\"list-item__subtitle\">" + element.informacion + "</div></li>";
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