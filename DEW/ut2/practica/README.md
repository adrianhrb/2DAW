# TAREA DE LA UNIDAD 2

1. Realizar una pequeña aplicación en JavaScript que muestre lo siguiente:

- Tabla de multiplicar del 7.
- Tabla de sumar del 8. -
- Tabla de dividir del 9.

Utilizar tres tipos distintos de bucles que hay en JavaScript (para cada número un tipo de bucle diferente).

```javascript
function tabla7() {
  for (i = 0; i <= 10; i++) {
    var res = 7 * i;
    console.log("7 * " + i + " = " + res);
  }
}

function tablaSuma8() {
  var i = 0;
  while (i <= 10) {
    var res = 8 + i;
    console.log("8 + " + i + " = " + res);
    i++;
  }
}

function tablaDivide9() {
  var i = 0;
  do {
    var res = 9 / i;
    console.log("9 / " + i + " = " + res);
    i++;
  } while (i <= 10);
}
```

En el primer bucle, el de la tabla del 7 hemos utilizado un bucle (dentro de una función) clásico. El segundo bucle, es a través de un while, en el que definimos la i fuera del bucle y vamos aumentando su valor dentro y dentendremos el bucle cuando la i sea mayor que el 10. El último es bastante similar al segundo pero lo aplicamos con un do -> while. [El archivo JavaScript aquí](./tables.js)

2. Sabiendo que cuando desplazamos 1 bit a la derecha dividimos un entero por 2 y cuando lo desplazamos a la izquierda estamos multiplicando por 2; configurar tu web para que también imprima el resultado de las siguientes operaciones empleando desplazamiento de bits:

   - 125 / 8 -> 125 >> 3
   - 40 x 4 -> 40 << 2
   - 25 / 2 -> 25 >> 1
   - 10 x 16 -> 10 << 4

3. Dado el siguiente código de una calculadora simple, Se pide:
   - Modificar el código proporcionado para agregar condicionales if que manejen las operaciones matemáticas según el botón que se presione.
   - También, modificar el código para usar un condicional switch en lugar de múltiples if para manejar las operaciones matemáticas.
   - Comentar el código y asegurarse de que esté bien indentado para una mayor claridad y presentación.

Solucion:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Calculadora Simple</h1>
    <br />
    <form>
      <label for="numero1"
        >Número 1:
        <input
          type="number"
          style="text-align:center"
          id="numero1"
          name="numero1"
          required
        />
      </label>
      <br /><br />
      <label for="numero2"
        >Número 2:
        <input
          type="number"
          style="text-align:center"
          id="numero2"
          name="numero2"
          required
        />
      </label>
      <br /><br />
      <div>
        <button type="button" id="+" onclick="calculate('+')">+</button>
        <button type="button" id="-" onclick="calculate('-')">-</button>
        <button type="button" id="*" onclick="calculate('*')">&times;</button>
        <button type="button" id="/" onclick="calculate('/')">÷</button>
      </div>
    </form>

    <p>
      Resultado:
      <input type="text" style="text-align:center" id="resultado" readonly />
    </p>

    <script>
      function calculate(operation) {
        var num1 = parseFloat(document.getElementById("numero1").value);
        var num2 = parseFloat(document.getElementById("numero2").value);
        var result = undefined;
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
          default:
            result = "Problems with operation";
            break;
        }
        document.getElementById("resultado").value = result;
      }
    </script>
  </body>
</html>
```
