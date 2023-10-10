# Actividades prácticas unidad 2

1. Tal y como ya hemos visto, hemos visto que en ciertas ocasiones el motor de ejecución de javascript puede estar apagado en el cliente, ya sea de forma voluntaria o involuntaria. En tales casos, conviene incluir un aviso empleando para ello las etiquetas <noscript>mensaje</noscript>. Añade dicha etiqueta en el código de una página y prueba el efecto desactivando para ello javascript en el navegador. **Actividad probada en navegador**

2. Indica el valor que generan las siguientes expresiones y el tipo de datos de los mismos (emplea para ello la función typeof()):

   - 2 > 3 +2 -> Boolean
   - 1 + false +3.5 -> Number
   - 4 \* true + 2 -> Number
   - 5 / 0 -> Number
   - 10 > 2 > 0 -> Boolean
   - 15 < 3 \* 10 -> Boolean
   - 3 \* hola + 2 -> NaN (Number)
   - 5 / “hola” -> NaN (Number)
   - π \* 32 -> Error π not defined
   - “Tienes” + 23 + “años” -> String

3. ¿Qué valor producirán las siguientes expresiones?

   - parseInt("15"); -> 15
   - parseInt("15.5") -> 15
   - parseInt(15.5) -> 15
   - parseInt("true") -> NaN
   - parseInt(true) -> NaN
   - parseInt("Pedro") -> NaN
   - parseInt(15 + "Pedro") -> 15
   - parseFloat("15.5") -> 15.5
   - parseFloat(15.5) -> 15.5

4. Observa el siguiente código.¿La variable nombre se define de modo local o global? Copia y ejecuta el código para probar su funcionalidad. En caso de no funcionar cámbialo para solucionar el problema.

```javascript
<script>
    var nombre = "Pedro";
    function saludar(){
        alert("Hola" + nombre);
    }
    saludar();
</script>
```

5. ¿Qué valor se obtendrá al ejecutar estas expresiones?

a. 16 << 2
b. 8 > 10 ? v1 = “sí” : v1 = “no”
c. var n=7; alert(“n vale “ + (++n));
d. var m=17; alert("m vale " + (m++)); alert(m);
e. 3 ^ 2
f. var y=17; y%=5;
g. var caja = ["percha", "balón"]; alert(caja[1]);
h. var a=3,b=6; var h = a > b ? a : b;

6. Observa el siguiente código:

var arr=[1,2,3,4];
for(var i=0; i < arr.length; i++) {
console.log(arr[i]);
}
for(var i=0, len=arr.length; i < len; ++i) {
console.log(arr[i]);
}
a) ¿Muestran la misma información el primer y el segundo bucle?
b) ¿Cuál es la diferencia entre los mismos?
c) ¿Existe diferencia entre ++i e i++?
d) ¿Qué muestra el siguiente código: "arr.forEach(function(i){console.log(i)});"?

e) ¿Y el siguiente?
for (i of arr) {
console.log(i);
}
f) ¿Hay diferencia con el siguiente?
for (i in arr){
console.log(i)
}

7. Realiza un programa en JavaScript que calcule el área y el perímetro de una circunferencia de radio 5 m. A continuación, modifica dicho código para que el usuario pueda introducir el radio. Recuerda que para seleccionar un elemento desde HTML debes usar la instancia document.getElementById(""). Algunas funciones predefinidas necesarias/útiles para esta tarea son:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perimeter calculator</title>
    <script src="perimeter.js"></script>
</head>
<body>
    <h1>Radio de la circunferencia que quieras calcular:</h1>
    <form action="perimeter.js" method="post">
        <input type="number" id="radius">
        <input type="button" onclick="perimeterCalculator();" value="Enviar"></input>
    </form>
    <p>El resultado de la operación es: <b id="result"></b></p>
</body>
</html>
```

```javascript
function perimeterCalculator() {
  var radius = document.getElementById("radius").value;
  var result = 2 * Math.PI * radius;
  var toWrite = document.getElementById("result");
  toWrite.innerHTML = result;
}
```

8. JavaScript puede manejar los eventos de una página web para conocer, por ejemplo, cuando el ratón pasa sobre un elemento. Aquí tienes un código que sirve de ejemplo para los siguientes eventos: onmouseover, onmouseout, onblur. Cópialo y ejecútalo para analizar su función:

```html
<h1>Ejemplo de Eventos onmouseover, onmouseout y onblur.</h1>
<div
  id="miDiv"
  onmouseover="mostrarMensaje('Mouse sobre el div')"
  onmouseout="mostrarMensaje('Mouse fuera del div')"
>
  <p>¡Pasa el mouse sobre este div!</p>

  <input
    type="text"
    onblur="mostrarMensaje('El campo de texto ha perdido el foco')"
    placeholder="Escribe algo y luego haz clic fuera"
  />
</div>
<p id="mensaje"></p>

<script>
  function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").innerHTML = mensaje;
  }
</script>
```

9. Crea una página HTML que permita al usuario calcular una propina según el total de la factura a pagar. Esta web debe permitir al usuario introducir el monto total de la factura; seleccionar un porcentaje de propina a pagar (10, 15 0 20%) y obtener en pantalla el valor de la propina.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tips calculator</title>
    <script src="tips.js"></script>
  </head>
  <body>
    <h1>Calculadora de propinas</h1>
    <p>Ingrese el precio que ha pagado por la cuenta:</p>
    <form action="tips.js" method="post">
      <input type="number" name="pay" id="pay" />
      <p>Seleccione el porcentaje de propina que quiere dejar:</p>
      <select id="percent">
        <option value="10" id="10">10%</option>
        <option value="15" id="15">15%</option>
        <option value="20" id="20">20%</option>
      </select>
      <br />
      <br />
      <input type="button" value="Calcular" onclick="tipsCalculator();" />
    </form>
    <p id="result"></p>
  </body>
</html>
```

```javascript
function tipsCalculator() {
  var pay = document.getElementById("pay").value;
  var percent = document.getElementById("percent").value;
  var result = "";
  if (percent == "10") {
    result = pay * 0.1;
  } else if (percent == "15") {
    result = pay * 0.15;
  } else if (percent == "20") {
    result = pay * 0.2;
  } else {
    result = 0;
  }
  document.getElementById("result").innerHTML =
    "El cálculo de porpinas determina que tienes que dejar " +
    Math.round(result) +
    " €";
}
```

10. Observa y analiza la función del siguiente código. A continuación modifica el código para que sea el usuario el que escoja el número de filas del rombo.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Rombo de emoticonos</title>
  </head>
  <body>
    <div id="rombo" style="text-align: center"></div>
    <script>
      function dibujarRombo(filas) {
        let output = "";
        //Parte creciente del rombo:
        for (let i = 1; i <= filas; i++) {
          let linea = "";
          for (let j = 1; j <= 2 * i - 1; j++) {
            linea += "*";
          }
          output += linea + "<br>";
        }
        //Parte decreciente del rombo:
        for (let i = filas - 1; i >= 1; i--) {
          let linea = "";
          for (let j = 1; j <= 2 * i - 1; j++) {
            linea += "*";
          }
          output += linea + "<br>";
        }
        document.getElementById("rombo").innerHTML = output;
      }
      dibujarRombo(15); //Ejecutamos la función.
    </script>
  </body>
</html>
```

11. Crea una web sencilla que permita al usuario introducir un número de entrada y obtener todos los divisores del mismo. Para ello, algunas funciones a tener en cuenta además de las vistas anteriormente son:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Divisors generator</title>
  </head>
  <body>
    <h1>Dime un número para ver sus divisores</h1>
    <input type="number" id="number" /><br /><br />
    <input type="button" value="Calcular" onclick="calculoDivisores();" />
    <p id="divisors"></p>
    <script>
      function calculoDivisores() {
        numberToCalculate = document.getElementById("number").value;
        finalDivisors = [];
        text = "Los divisores son: ";
        for (i = 0; i <= numberToCalculate; i++) {
          if (numberToCalculate % i == 0) {
            finalDivisors.push(i);
          }
        }
        document.getElementById("divisors").innerHTML =
          text + finalDivisors.join(",");
      }
    </script>
  </body>
</html>
```

12. Basándote en la actividad anterior, crea una web que permita al usuario obtener un determinado número de valores ordenados de la sucesión de Fibonacci (La matemática incrustada en la inmensa variedad de formas de vida) en la que cada término se obtiene como suma de los dos anteriores:

0, 1, 1, 2, 3, 5, 8, 13...

Un modificador de utilidad para esta tarea es el ".push()", el cual permite añadir nuevos elementos a un array cualquiera previamente definido.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fibonacci</title>
  </head>
  <body>
    <h1>Te calculo los n primeros números de Fibonacci</h1>
    <input type="number" placeholder="N aquí" id="number" />
    <input type="button" value="Calcular" onclick="fiboCalculator()" />
    <p id="result"></p>
    <script>
      function fiboCalculator() {
        var number = document.getElementById("number").value;
        var i = 0;
        var j = 1;
        var res = 0;
        var finalRes = [];
        finalRes.push(i);
        finalRes.push(j);
        number = number - 2;
        for (cont = 0; cont < number; cont++) {
          res = i + j;
          finalRes.push(res);
          i = j;
          j = res;
        }
        document.getElementById("result").innerHTML = finalRes.join(",");
      }
    </script>
  </body>
</html>
```
