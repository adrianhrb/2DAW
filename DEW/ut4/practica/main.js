function edificio(calle, numero, postal) {
    this.calle = calle;
    this.numero = numero;
    this.postal = postal;
    this.plantas = []
    this.agregarPlantasYPuertas = function(numplantas, puertas) {
        for (let i = 0; i < numplantas; i++) {
            const floor = {'doors':[]}
            for (let j=1; j<=puertas; j++){
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
        this.plantas[planta - 1].doors[puerta - 1].owner = nombre
    }
    this.imprimePlantas = function(){
        const OWNERS = []
        for (let i=0; i<=this.plantas.length; i++){
            for (let j=0; j <= this.plantas[i].doors.length; j++){
                OWNERS.push(this.plantas[i + 1].doors[j + 1].owner)
            }
        }
        console.log(OWNERS)
    }
    document.getElementById('info').innerHTML = 'construido nuevo edificio en calle: ' + calle +', nº: ' + numero + ', CP: ' + postal
}