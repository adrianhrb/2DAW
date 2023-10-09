function tipsCalculator() {
    var pay = document.getElementById('pay').value
    var percent = document.getElementById('percent').value
    var result = ''
    if (percent == '30'){
        result = pay * 0.70
    }
    document.getElementById('result').innerHTML = 'El cálculo de porpinas determina que tienes que dejar ' + Math.round(result) + ' €'
}