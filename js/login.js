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
                localStorage.setItem("sesion", this.responseText);
                window.location.href = 'index.html';
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("POST", HOST + 'login.php', true);
    xmlhttp.send(data);
}