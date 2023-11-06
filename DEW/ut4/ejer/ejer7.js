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
        if (numbersAppeared.includes(array[i])){
            alert('Repetido');
        }
        else {
            alert('No se repite');
        }
        numbersAppeared.push(array[i]);
    };
};