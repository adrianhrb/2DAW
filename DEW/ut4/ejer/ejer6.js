function arrayGenerator(arrLen, minValue, maxValue){
    var myArray = []
    for (i=0; i < arrLen; i++){
        var randomNum = Math.random() * (maxValue - minValue) + minValue;
        myArray.push(Math.floor(randomNum));
    };
    return myArray
};

let arrayToWork = arrayGenerator(20, -100, 100)

function arrayInfo(array){
    let maxArrayNum = array.reduce((a,b) => Math.max(a, b))
    let minArrayNum = array.reduce((a,b) => Math.min(a, b))
    let minIndex = array.indexOf(minArrayNum)
    let maxIndex = array.indexOf(maxArrayNum)
    return maxArrayNum, minArrayNum, minIndex, maxIndex

}