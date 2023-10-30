function arrayGenerator(arrLen, minValue, maxValue){
    var myArray = []
    for (i=0; i < arrLen; i++){
        var randomNum = Math.random() * (maxValue - minValue) + minValue;
        myArray.push(Math.floor(randomNum));
    };
    return myArray
};

arrayGenerator(20, 20, 100).sort(function(){return Math.random() - 0.5;});