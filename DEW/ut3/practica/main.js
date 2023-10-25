// MAIN PAGE CODE

function generateText(){
    let name = window.prompt('Cómo te llamas (nombre y apellidos)?: ').toLowerCase()
    let day = window.prompt('Qué día naciste?: ')
    let month = window.prompt('En qué 1 naciste?: ')
    let year = window.prompt('En que año naciste?: ')
    let nameChars = name.length
    let firstA = name.indexOf('a')
    let lastA = name.lastIndexOf('a')
    let d = new Date()
    let myDate = new Date(year + ',' + month + ',' + day)
    let weekDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    let bornDay = weekDays[myDate.getDay()]
    let age = d.getFullYear() - parseInt(year)
    let shortName = name.slice(3)
    let upperName = name.toUpperCase()
    let coseno = Math.cos(180)
    let maxNum = Math.max(34,67,23,75,35,19)
    let randomNum = Math.floor(Math.random() * 100000)
    let texto = `Buenos dias ${name},<br>Tu nombre tiene ${nameChars} caracteres incluyendo espacios.<br>La primera A de tu nombre está en la posición ${firstA}.\
    <br>La últuma A de tu nombre está en la posición ${lastA}.<br>Tu nombre menos las 3 primeras letras es: ${shortName}.<br>Tu nombre todo en mayúsculas es ${upperName}.<br>\
    Tu edad es ${age}.<br>Naciste un feliz ${bornDay} del año ${year}<br>El coseno de 180 es: ${coseno}<br>El número mayor de (34,67,23,75,35,19) es: ${maxNum}<br>\
    Ejemplo de número al azar: ${randomNum}`
    window.alert(texto)
    document.write(texto)
}

// OTHER WINDOW CODE
function generateWindow() {
    var openedWindow = window.open('', "", "width=500,height=500,resizable=false");
    openedWindow.document.write('<h3>Esto es una nueva ventana</h3>');
    openedWindow.document.write('URL: ' + openedWindow.location.href + '<br>');
    openedWindow.document.write('Protocolo: ' + openedWindow.location.protocol + '<br>');
    openedWindow.document.write('Navegador: ' + openedWindow.navigator.appCodeName + '<br>');
    if (openedWindow.navigator.javaEnabled == true) {
        openedWindow.document.write('SI tiene java activado' + '<br>');
    } else{
        openedWindow.document.write('NO tiene java activado' + '<br>');
    };
    openedWindow.document.write('<br><iframe src="https://bing.es" height="600" width="800"></iframe>' + '<br>');
}