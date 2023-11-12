
function edificio(calle, numero, postal) {
    this.calle = calle;
    this.numero = numero;
    this.postal = postal;
    this.plantas = []
    this.agregarPlantasYPuertas = function(numplantas, puertas) {
        for (let i = 0; i < numplantas; i++) {
            const floor = {'doors':[]}
            for (let j=1; j<puertas; j++){
                floor.doors.push({'door': j, 'owner': ''})
            }
            this.plantas.push(floor)
        }
    }
    this.modificarNumero = function (numero){this.numero = numero};
    this.modificarCalle = function (calle){this.calle = calle};
    this.modificarPostal = function (postal){this.postal = postal};
    this.imprimeCalle = function(){
        document.getElementById('info').innerHTML = 'La calle de este edificio es ' + this.calle
    }
    this.imprimeNumero = function(){
        document.getElementById('info').innerHTML = 'El numero de este edificio es ' + this.numero
    }
    this.imprimePostal = function(){
        document.getElementById('info').innerHTML = 'El codigo postal de este edificio es ' + this.postal
    }
    this.agregarPropietario = function(nombre, planta, puerta){
        this.plantas[planta].doors[puerta].owner = nombre
    }
    this.imprimePlantas = function(){
        for (let i=0; i<=this.plantas.length; i++){
            plant = this.plantas[i]
            for (let j=0; j <= plant.length; i++){
                document.getElementById('info').innerHTML = plant.doors[j].owner
            }
        }
    }
}


function crear(){
    let calle = document.getElementById('calle').value
    let numero = document.getElementById('numero').value
    let postal = document.getElementById('postal').value
    document.getElementById('info').innerHTML = 'construido nuevo edificio en calle: ' + calle +', nº: ' + numero + ', CP: ' + postal
}
