// MAIN PAGE CODE
let name = window.prompt('Cómo te llamas (nombre y apellidos)?: ').toLowerCase()
let day = window.prompt('Qué día naciste?: ')
let month = window.prompt('En qué 1 naciste?: ')
let year = window.prompt('En que año naciste?: ')
let nameChars = name.length
let firstA = name.indexOf('a')
let lastA = findLastA()
function findLastA() {
    for (let i = nameChars - 1; i >= 0; i--){
        if (name[i].toLowerCase() == 'a') {
            return i
        }
    }
}
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
onload = document.getElementById("texto").innerHTML = texto

// OTHER WINDOW CODE
/* function newWindow() {
    var openedWindow = window.open('', "", "width=500,height=500,resizable=false");
    openedWindow.getElementById('newinfo').innerHTML = 'Ejemplo de nueva ventana'
    let url = openedWindow.location.href
    let protocol = openedWindow.location.protocol
    let navCode = openedWindow.navigator.appCodeName
    if (openedWindow.navigator.javaEnabled == true) {
        let javaAnswer = 'SI tiene java activado'
    } else{
        let javaAnswer = 'NO tiene java activado'
    }
    let textTOWrite = `Url: ${url}<br>Protocol: ${protocol}<br>Nombre en código del navegador: ${navCode}<br>${javaAnswer}`
    openedWindow.document.getElementById('newinfo').innerHTML = textTOWrite
    openedWindow.document.getElementById('myframe').src = 'https://bing.es'
} */