var s = document.createElement("script");
s.src = "js/main.js";
document.querySelector("head").appendChild(s);

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
                else if(obj.rango == 0){

                }
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'login.php', true);
    xmlhttp.send(data);
}
function sesionAdministador() {
    var str = sessionStorage.getItem("sesion");
    if (str != null) {
        str = JSON.parse(str);
        document.getElementById('nombreUsuario').innerHTML = str.nombre;
    }
    else {
        window.location.href = "administrador.html";
    }
}
function sesionUsuario() {
    var str = sessionStorage.getItem("sesion");
    if (str != null) {
        str = JSON.parse(str);
        document.getElementById('nombreUsuario').innerHTML = str.nombre;
    }
    else {
        window.location.href = "usuario.html";
    }
}