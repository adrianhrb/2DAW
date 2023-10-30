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
    let minIndex = null
    let maxIndex = null
    for (i=0; i < array.legth; i++){
        if (minIndex != null && maxIndex != null){
            return minIndex, maxIndex
        }
        if (array[i] == minIndex) {
            if (minIndex == null){
                minIndex = i
            }}
        if (array[i] == maxIndex) {
            if (maxIndex == null){
                maxIndex = i
            }}
    }
}