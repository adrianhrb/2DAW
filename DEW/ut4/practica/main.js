function edificio(calle, numero, postal) {
    this.calle = calle;
    this.numero = numero;
    this.postal = postal;
    this.agregarPlantasYPuertas = function(numplantas, puertas) {
        plantas = 
    }
    this.modificarNumero = function (numero){this.numero = numero};
    this.modificarCalle = function (calle){this.calle = calle};
    this.modificarPostal = function (postal){this.postal = postal};
    this.imprimeCalle = function(){console.log(this.calle)};
    this.imprimeNumero = function(){console.log(this.numero)};
    this.imprimePostal = function(){console.log(this.postal)};
    this.agregarPropietario = function(nombre, planta, puerta){}
}

function planta(numero, puertas) {
    this.plantas = [...Array(puertas).keys()]
}
