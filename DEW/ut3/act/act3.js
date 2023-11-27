function charCalculate() {
    var mainText = document.getElementById('maintext').value
    var toFind = document.getElementById('find').value
    var totalChars = mainText.length
    var wordPosition = -1
    var toFindList = mainText.split(' ')
    for (i = 0; i < toFindList.length; i++) {
        if (toFind == toFindList[i]) {
            var wordPosition = i
        }
    }
    wordPosition += 1 // Aumentamos uno para que el usuario, para que no empiece la cuenta en 0
                     // Como se hace en los languajes de programación
    document.getElementById('char').innerHTML = 'El nº total de caracteres es: ' + totalChars
    if (0 < wordPosition){
        document.getElementById('position').innerHTML = 'La palabra a buscar está en la posición: ' + wordPosition
    }
    else{
        document.getElementById('position').innerHTML = 'La palabra no está en el texto'
    }
}