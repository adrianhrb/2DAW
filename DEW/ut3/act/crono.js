window.onload = init;
function init(){
    document.querySelector(".start").addEventListener("click",cronometrar);
    document.querySelector(".stop").addEventListener("click",parar);
    document.querySelector(".reiniciar").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.querySelector(".start").removeEventListener("click",cronometrar);
}
function escribir(){
    var hours, minutes, seconds
    s++;
    if (s>59){
        m++;
        s=0;
    }
    
    if (m>59){
        h++;
        m=0;
    }

    if (s < 10){
        seconds = '0' + s
    } else {
        seconds = s
    }

    if (m < 10){
        minutes = '0' + m
    } else {
        minutes = m
    }

    if (hours < 10){
        hours = '0' + h
    } else {
        hours = h
    }
    document.getElementById("hms").innerHTML = hours + ":" + minutes + ":" + seconds; 
}
function parar(){
    clearInterval(id);
    document.querySelector(".start").addEventListener("click",cronometrar);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector(".start").addEventListener("click",cronometrar);
}