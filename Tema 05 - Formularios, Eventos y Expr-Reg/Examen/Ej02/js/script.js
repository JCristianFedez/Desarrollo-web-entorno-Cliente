function remplazaMoneda(texto){
    let pat =/(euro)(s)?/ig;
    return texto.replace(pat,"€");
}

function validaIP(ip){
    let pat =/^(([01]?\d{1,2}|[2]?[0-5]{1,2})\.){3}(([01]?\d{1,2}|[2]?[0-5]{1,2}))$/;
    return pat.test(ip);
}

function extraerIPs(ips){
    let pat =/(([01]?\d{1,2}|[2]?[0-5]{1,2})\.){3}(([01]?\d{1,2}|[2]?[0-5]{1,2}))/g;
    let strIPS=ips.match(pat);
    return strIPS.splice(",");
}