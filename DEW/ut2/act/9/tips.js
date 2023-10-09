function tipsCalculator() {
    var pay = document.getElementById('pay').value
    var percent = document.getElementById('percent').value
    var result = ''
    if (percent == '10'){
        result = pay * 0.10
    }
    else if (percent == '15'){
        result = pay * 0.15
    }
    else if (percent == '20'){
        result = pay * 0.20
    }
    else {
        result = 0
    }
    document.getElementById('result').innerHTML = 'El cálculo de porpinas determina que tienes que dejar ' + Math.round(result) + ' €'
}