var toSendText = document.getElementById('texto');
var generator = document.getElementById('btnSubmit');

if (document.getElementById('canario').checked) {
    generator.addEventListener("click", crearHistoriaCanaria)
} else {
    generator.addEventListener("click", crearHistoriaPeninsular)
}

function crearHistoriaCanaria() {
    toSendText.innerHTML = ""
    var name = document.getElementById('name').value
    var historiasSinNombre = [
        'Porque dicen que en Canarias se vive mejor',
        'Llueve muy pocas veces al año, to\'l dia pa la playa',
        'Mira a ver que las guaguas a veces (siempre) llegan tarde',
        'No te olvides nunca de la crema solar',
        'El Teide es lo más grande que tienes pa ir a ver',
        'Y en los guachinches hacen un mojo buenísimo'
    ]

    var historiasConNombre = [
        nombre + 'dice que se quiere mudar pa\'ca',
        'Chacho ' + nombre + ' mira bien donde te vas a quedar',
        'Dice ' + nombre + ' que ya no quiere volver más a su país'
    ]

    var contador = 1
    while (contador < 5) {
        if (contador % 2 == 0) {
            toSendText += historiasSinNombre[Math.random() * (historiasSinNombre.length - 1)]
        } else {
            toSendText += historiasSinNombre[Math.random() * (historiasConNombre.length - 1)]
        }
        contador += 1
    }
}

function crearHistoriaPeninsular() {
    window.alert('Hola')
}