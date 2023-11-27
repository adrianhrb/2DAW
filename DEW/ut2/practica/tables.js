function tabla7() {
  var toWriteResults = []
    for (i = 0; i <= 10; i++) {
      var res = 7 * i;
      var toWrite = "7 * " + i + " = " + res
      toWriteResults.push(toWrite)
    }
    document.getElementById('7').innerHTML = toWriteResults.join('<br>');
  }
  
function tablaSuma8() {
  var i = 0;
  var toWriteResults = [];
  while (i <= 10) {
    var res = 8 + i;
    var toWrite = "8 + " + i + " = " + res
    toWriteResults.push(toWrite)
    i++;
  }
  document.getElementById('8').innerHTML = toWriteResults.join('<br>');
}

function tablaDivide9() {
  var i = 0;
  var toWriteResults = [];
  do {
    var res = 9 / i;
    var toWrite = "9 / " + i + " = " + res
    toWriteResults.push(toWrite)
    i++;
  } while (i <= 10);
  document.getElementById('9').innerHTML = toWriteResults.join('<br>');
}