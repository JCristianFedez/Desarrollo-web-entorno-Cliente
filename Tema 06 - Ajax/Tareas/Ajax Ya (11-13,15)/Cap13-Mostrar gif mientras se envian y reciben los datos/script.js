addEventListener("DOMContentLoaded",inicializarEventos,false);

function inicializarEventos(){
    let form = document.getElementById("formulario");
    form.addEventListener("submit",enviarDatos,false);
}

function enviarDatos(elEvento){
    let e = elEvento || window.event;

    e.preventDefault();
    enviarFormulario();
}

function retornarDatos(){
    let str = "";
    let nom = document.getElementById("nombre").value;
    let com = document.getElementById("comentarios").value;

    str = `nombre=${encodeURIComponent(nom)}&`+
    `comentarios=${encodeURIComponent(com)}`;
    return str;
}

let conexion1;
function enviarFormulario(){
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open("POST","pagina1.php",true);
    conexion1.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
    conexion1.send(retornarDatos());
}

function procesarEventos(){
    let resultados = document.getElementById("resultados");

    if(conexion1.readyState == 4){
        if(conexion1.status == 200){
            resultados.innerHTML = "Gracias";
        }else{
            alert(conexion1.statusText);
        }
    }else{
        resultados.innerHTML = "<img src='cargando.gif'>";
    }
}