function arrayGenerator(arrLen, minValue, maxValue){
    var myArray = []
    for (i=0; i < arrLen; i++){
        var randomNum = Math.random() * (maxValue - minValue) + minValue;
        myArray.push(Math.floor(randomNum));
    };
    return myArray
};

let arrayToCalculate = arrayGenerator(20, 60, 100)

function squareCalculator(array) {
    let squeareRootArray = []
    for (i=0; i < array.length; i++){
    squeareRootArray.push(array[i] ** 1/2)
    }
    return squeareRootArray
}

squareCalculator(arrayToCalculate)