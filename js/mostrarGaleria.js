var s = document.createElement("script");
s.src = "js/main.js";
document.querySelector("head").appendChild(s);

function mostrarGaleria() {
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
                    html += "<div class=\"card\"><div class=\"card-hero\"><img src=\"" + element.imagen + "\"></div><div class=\"card-body\"><h3 class=\"card-title\">" + element.nombre + "</h3></div></div>";
                });
                document.getElementById('galeria_animales').innerHTML = html;
            }
        }
    }
    //dir del server a donde se va a conectar
    xmlhttp.open("GET", HOST + 'mostrarAnimales.php', true);
    xmlhttp.send();
}


