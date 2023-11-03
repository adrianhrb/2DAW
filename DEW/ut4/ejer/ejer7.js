function arrayGenerator(arrLen, minValue, maxValue){
    var myArray = []
    for (i=0; i < arrLen; i++){
        var randomNum = Math.random() * (maxValue - minValue) + minValue;
        myArray.push(Math.floor(randomNum));
    };
    return myArray
};

let randomArray = arrayGenerator(50, 10, 20)

function checkRepeat(array) {
    let numbersAppeared = []
    for (i=0; i<=array.length; i++){
        if (numbersAppeared.find(array[i]) != undefined){
            console.log('Repetido')
        }
        else {
            console.log('No se repite')
        }
        numbersAppeared.push(array[i])
    }
}