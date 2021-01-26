addEventListener("DOMContentLoaded",inicializarEventos,false);

function inicializarEventos(){
    let select1 = document.getElementById("carreras");
    select1.addEventListener("change",mostrarMaterias,false);
}

let conexion1;
function mostrarMaterias(elEvento){
    let e = elEvento || window.event;

    let codigo = document.getElementById("carreras").value;
    
    let select2 = document.getElementById("materias");
    while(select2.firstElementChild){
        select2.remove(select2.firstElementChild);
    }

    if(codigo != 0){
        conexion1 = new XMLHttpRequest();
        conexion1.onreadystatechange = procesarEventos;
        conexion1.open("GET",`pagina1.php?cod=${codigo}`,true);
        conexion1.send();
    }else{
        // let select2 = document.getElementById("materias");
        // while(select2.firstElementChild){
        //     select2.remove(select2.firstElementChild);
        // }
    }
}

function procesarEventos(){
    let d = document.getElementById("espera");

    if(conexion1.readyState == 4){
        d.innerHTML = "";

        let select2 = document.getElementById("materias");
        while(select2.firstElementChild){
            select2.remove(select2.firstElementChild);
        }

        let xml = conexion1.responseXML;
        let pals = xml.getElementsByTagName("materia");
        for (let i = 0; i < pals.length; i++) {
            let op = document.createElement("option");
            let texto = document.createTextNode(pals[i].innerHTML);
            op.appendChild(texto);
            select2.appendChild(op);
        }
    }else{
        d.innerHTML = "<img src='cargando.gif'>";
    }
}