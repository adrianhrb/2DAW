function perimeterCalculator() {
    var radius = document.getElementById('radius').value
    var result =  2 * Math.PI * radius
    var toWrite = document.getElementById('result')
    toWrite.innerHTML = result
}