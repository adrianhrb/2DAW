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
    this.imprimeCalle = function(){console.log(this.calle)};
    this.imprimeNumero = function(){console.log(this.numero)};
    this.imprimePostal = function(){console.log(this.postal)};
    this.agregarPropietario = function(nombre, planta, puerta){
        this.plantas[planta].doors[puerta].owner = nombre
    }
    this.imprimePlantas = function(){
        for (let i=0; i<=this.plantas.length; i++){
            plant = this.plantas[i]
            for (let j=0; j <= plant.length; i++){
                console.log(plant.doors[j].owner)
            }
        }
    }
}


