function calculate(operation) {
    // Extracting the two number values, working in float
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var result = undefined;
    // Using switch conditional instead of an if/else anidation
    switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        case 'x':
          result = Math.pow(num1, num2);
          break;
        default:
            result = 'Something went wrong';

  }
  document.getElementById("resultado").value = result;
  }