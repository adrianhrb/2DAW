
let tiempo = 0;//contador para el tiempo.
let onOff = false;//Programamos un interruptor.
let contador;//variable para almancenar el intervalo de repetición.

function Crono() {
    tiempo++;
    //A continuación representamos horas:minutos:segundos
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;
    document.getElementById('cronometro').innerHTML = horas.toString().padStart(2,'0')+':'+minutos.toString().padStart(2,'0')+':'+segundos.toString().padStart(2,'0');
}

function iniciar() {
    if (onOff == false) {
        onOff = true;//Encendemos el interruptor.
        contador = setInterval(Crono, 1000);
    }
}

function detener() {
    clearInterval(contador);//Borramos el setInterval parando la cuenta.
    onOff = false;
}

function reiniciar() {
    tiempo = 0;
    detener();
    document.getElementById('cronometro').innerHTML = '00:00:00';
}
