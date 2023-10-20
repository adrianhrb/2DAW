function randomGenerator() {
    var randomNum = Math.floor(Math.random() * 10)
    document.getElementById('num').value = randomNum
    if (randomNum <= 5) {
        googleFunction()
    } else {
        alertFunction()
    }
}

function googleFunction() {
    window.open('https://google.com')
}

function alertFunction() {
    var currDate = Date(Date.now())
    var hour = currDate.toString()
    if (parseInt(hour.split(' ')[4].split(':')[0]) <= 12) {
        window.alert('Buenos dias, aun es pronto')
    } else {
        window.alert('Buenas tardes, ya fue mediodia')
    }
}