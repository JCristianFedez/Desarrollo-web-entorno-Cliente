addEventListener("DOMContentLoaded",inicializarEventos,false);

function inicializarEventos(){
    let ref=document.getElementById('formulario');
    ref.addEventListener('submit',enviarDatos,false);
}

function enviarDatos(elEvento){
    let e = elEvento || window.event;

    e.preventDefault();//Evitar que el enlace abra la URL
    enviarFormulario();
}

function retornarDatos(){
    let cad = "";
    let nom = document.getElementById("nombre").value;
    let com = document.getElementById("comentarios").value;

    cad = "nombre="+encodeURIComponent(nom)+
    "&comentarios="+encodeURIComponent(com);
    return cad;
}

let conexion1;
function enviarFormulario(){
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open("POST","pag1.php",true);
    conexion1.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    conexion1.send(retornarDatos());
}

function procesarEventos(){
    let resultados = document.getElementById("resultados");

    if(conexion1.readyState == 4){
        resultados.innerHTML="Gracias.";
    }else{
        if(conexion1.status == 200){
            resultados.innerHTML="Procesando...";
        }else{
            resultados.innerHTML="Error";
        }
    }
}
