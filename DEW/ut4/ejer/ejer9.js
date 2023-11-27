const DNI_CHAR = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']

let dni = window.prompt('Introduce el DNI numérico y calcularé la letra: ')

function charCalculator(dni) {
    if (dni.length != 8){
        alert('El dni debe tener 8 números')
        return false
    }
    return DNI_CHAR[parseInt(dni) % 23]
}

