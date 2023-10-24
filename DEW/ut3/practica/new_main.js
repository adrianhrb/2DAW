function newWindow() {
    window.open('new_window.html', "new", "width=200,height=200,resizable=false");
    document.getElementById('newinfo').innerHTML = 'Ejemplo de nueva ventana'
    let url = window.location.href
    let protocol = window.location.protocol
    let navCode = navigator.appCodeName
    if (navigator.javaEnabled == true) {
        let javaAnswer = 'SI tiene java activado'
    } else{
        let javaAnswer = 'NO tiene java activado'
    }
    let textTOWrite = `Url: ${url}<br>Protocol: ${protocol}<br>Nombre en código del navegador: ${navCode}<br>${javaAnswer}`
    document.getElementById('newinfo').innerHTML = textTOWrite
    document.getElementById('myframe').src = 'https://bing.es'
}

window.onload = newWindow()