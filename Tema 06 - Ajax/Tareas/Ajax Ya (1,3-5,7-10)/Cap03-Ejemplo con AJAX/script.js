addEventListener("DOMContentLoaded",inicializarEventos,false);

function inicializarEventos(){
    let ob;
    for(let i=1;i<=12;i++){
        ob=document.getElementById(`enlace${i}`);
        ob.addEventListener("click",presionEnlace,false);
    }
}

function presionEnlace(e){
    e.preventDefault();//Evitar que el enlace abra la URL
    let url=e.target.getAttribute("href");
    cargarHoroscopo(url);
}

let conexion1;
function cargarHoroscopo(url){
    conexion1=new XMLHttpRequest();
    conexion1.onreadystatechange=procesarEventos;
    conexion1.open("GET",url,true);
    conexion1.send();
}

function procesarEventos(){
    let detalles = document.getElementById("detalles");
    if(conexion1.readyState == 4 || conexion1.status == 200){
        detalles.innerHTML=conexion1.responseText;
    }else{
        detalles.innerHTML = "cargando...";
    }
}