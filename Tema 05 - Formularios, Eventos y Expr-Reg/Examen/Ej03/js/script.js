function cargar(){
    let zona1=document.getElementById("zona1");
    let aux="";
    for (let i = 1; i <= 5; i++) {
        aux+="<p id='p"+i+"'>Parrafo "+i+"</p>";
    }
    zona1.outerHTML="<div id='zona1'>"+aux+"</div>";

    document.getElementById("p1").addEventListener("click",mover);
    document.getElementById("p2").addEventListener("click",mover);
    document.getElementById("p3").addEventListener("click",mover);
    document.getElementById("p4").addEventListener("click",mover);
    document.getElementById("p5").addEventListener("click",mover);
    document.getElementById("p6").addEventListener("click",mover);
}

function mover(elEvento){
    let d1=document.getElementById("zona1");
    let d2=document.getElementById("zona2");

    let evento = elEvento || window.event;

    if(evento.target.parentElement.id=="zona1"){
        d2.appendChild(evento.target);
    }else{
        d1.appendChild(evento.target);
    }
}



addEventListener("DOMContentLoaded",cargar);