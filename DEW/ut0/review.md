# Javascript

### CREACION DE VARIABLES

```javascript
let firstName = "Adrian"; // Se puede reasignar
// IGUAL QUE LOS CONTEXTOS DE PYTHON (SI SE DECLARA EN UNA FUNCION SOLO AHI SE CREA)
firstName = "Daniel";
const lastName = 4;
var isDeveloper = true; // asignacion antigua
```

### CONDICIONALES

```javascript
let m = "a";
if (typeof m === "string") {
  console.log("string");
} else if (m === "number") {
  console.log("number");
} else {
  console.log("a saber");
}
```

### BUCLES WHILE Y DO WHILE

```javascript
let num = 10;
while (num > 0) {
  num = num - 1;
  console.log(num + " segundos");
}

do {
  //codigo del bucle
} while (condition);
```

### BUCLES FOR (inicializacion, condicion, actualizacion)

```javascript
for (let i = 0; i > 10; i++) {
  console.log(i);
}
```

### SWITCH (MATCH CASE EN PYTHON)

```javascript
let prueba = "hola";
switch (prueba) {
  case "hola":
    console.log("Muy buenas");
    break;
  case "adios":
    console.log("Hasta luego");
    break;
  default:
    console.log("A saber");
}
```

### FUNCIONES

```javascript
function saludar() {
  console.log("holaaa"); // NO DEVUELVE NADA!!!!
}
function suma() {
  return 1 + 1;
}
function getRandom() {
  const random = Math.random();
  const multiplied = random * 10;
  const rounded = Math.floor(multiplied);
  const result = rounded + 1;
  return result;
}
```

### FUNCIONES CON PARAMETROS

```javascript
function saludar(usuario) {
  console.log("Hola " + usuario);
}
function sumar(a, b) {
  // los parametros son lo que espera la funcion y los argumentos los
  // datos que se le pasan a la hora de la llamada
  return a + b;
} // parametros posicionales
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
```

### FUNCTIONS EXPRESIONS

```javascript
const suma = function (a, b) {
  // FUNCION ANONIMA, se llama con la variable
  return a + b;
}; // NO usa hoisting, es decir no podemos llamarla antes de crearla
```

### FUNCIONES FLECHA (ARROW FUNCTIONS) ESPECIE DE LAMBDAS DE PYTHON

```javascript
const sumar = (a, b) => a + b;
// SIEMPRE SON ANONIMAS, HAY QUE USAR VARIABLES. RETURN IMPLICITO
```

### RECURSIVIDAD

```javascript
function cuentaAtras(numero) {
  if (numero <= 0) {
    return;
  }
  console.log(numero);
  cuentaAtras(numero - 1);
}
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
```

### ARRAYS

```javascript
const list = ["hola", 1, 2, 3, null, true];
list[0] = 12; // Asignacion de elementos a la lista
```

### METODOS (PARA TRABJAR SOBRE LOS ARRAYS)

```javascript
const frutas = ["manzana", "pera", "platano", "fresa"];
frutas.length; //Para ver cuantos elementos hay
frutas.length = 2; // Corta y se queda con los dos primeros elementos
frutas.push("melocoton"); // Agrega al final del array, devuelve la nueva longitud del array
frutas.pop(); // Saca y devuelve el valor del ultimo elemento (ya eliminado)
frutas.shift(); // Igual que el pop pero con el primer elemento
frutas.unshift("fresa"); // Como un push pero al principio
const numbers = [1, 2, 3];
const numbers2 = [4, 5];
numbers.concat(numbers2); // Devuelve un nuevo array con los dos concatenados
const allNumbersSpread = [...numbers, ...numbers2]; // Hecho pero con SpreadOperator
```

### ITERACION DE ARRAYS

```javascript
// con while
let i = 0
while (i < frutas.length) {
    console.log(frutas[i])
    i++
}
// con bucle for
for (let i = 0; i < frutas.length, i++) {
    console.log(frutas[i])
}
// con iterador de iterables (for parecido a python)
for (const fruta of frutas) {
    console.log(fruta)
}
// metodo de array
frutas.forEach(function(el, index) {
    console.log('index: ' + index)
    console.log(el)
})
frutas.forEach(el => {
    console.log(el)
})
```

### BUSCAR EN UN ARRAY

```javascript
const emojis = ["✨", "🥑", "😍"];
const nums = [13, 27, 44, -10, 81];
emojis.indexOf("😍"); // Devuelve la posicion en la lista (2). -1 si no esta
emojis.includes("😍"); // Devuelve la pertenencia al array (true). false si no esta
// includes tambien funciona con las cadenas de texto
emojis.some((emoji) => emoji === "😍"); // Recorre para ver si algun elemento del array que cumple con la condicion que le estamos indicando. PE: Ver si un nombre tiene X lenght
// .some() deja de recorrer al encontrar la primera coincidencia
emojis.every((emoji) => emoji === "😀"); // Similar al some pero verifica si todos los elementos
// cumplen con la condicion que le pasamos
nums.find((number) => number < 0); // Busca el elemento con la condicion dada y lo devuelve
nums.findIndex((number) => number < 0); // Busca el indice (y lo devuelve) del primer
//elemento que cumple
```

### ORDENAMIENTO DE ARRAYS

```javascript
const numeros = [5, 10, 2, 25, 7];
numeros.sort(); // No ordena bien, convierte los numeros a string
// Forma ascendente
numeros.sort(function (a, b) {
  // return de un valor negativo -> a va delante de b
  // de un valor positivo -> b va delante de a
  // 0 -> son iguales, misma posicion
  return a - b;
});
numeros.sort((a, b) => a - b); // Forma sencilla
numeros.sort((a, b) => b - a); // Forma sencilla y order descendente
```

### TRANSFORMAR UN ARRAY

```javascript
// filter: Nuevo array con los elementos que cumplen la condicion
const number = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = number.filter(function (number) {
  return number % 2 === 0;
}); //[2, 4, 6]
const strings = ["hola", "adiós", "casa", "coche", "perro", "gato"];
const stringsWithA = strings.filter((string) => string.includes("a")); //['hola', 'adiós', 'casa', 'gato']

// map: Nuevo array de misma longitud con las modificaciones que se hagan
const doubleNumbers = number.map((num) => num * 2); //[2, 3,6, 8, 10, 12, 14]
const stringsLenght = strings.map((string) => string.length); // [4, 5, 4, 5, 5, 4]

//combinacion de map y filter
const numbersGreaterThanFive = numbers
  .map((number) => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter((number) => number > 5); // [6, 8, 10, 12, 14]

// reduce: permite obtener un solo valor a partir de un array
const sum = number.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
}, 0); // 0 es el valor inicial para el accumulator
```

### MATRICES EN JAVASCRIPT

```javascript
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
];
matriz[1][2]; // acceso a la matriz

// formas de iterar una matriz
for (let i = 0; i < matriz.length; i++) {
  // {1}
  for (let j = 0; j < matriz[i].length; j++) {
    // {2}
    console.log(matriz[i][j]);
  }
}

matriz.forEach((fila, filaIndex) => {
  fila.forEach((elemento, columnaIndex) => {
    console.log("Fila " + filaIndex);
    console.log("Columna " + columnaIndex);
    console.log("Elemento ", elemento);
    console.log("");
  });
});
```

### OBJETOS

```javascript
const gameSystem = {
  name: "PS5",
  price: 550,
  company: "Sony",
  games: ["Call of duty", "Diablo IV", "Last of Us"],
  "dia de venta": 12,
  specs: {
    // otro objeto
    cpu: "amd",
    gpu: "amd",
    ram: 16,
  },
  runGame(game) {
    console.log("Jugando a " + game);
  }, //Metodo del objeto
};
// Acceso a los atributos/propiedades del objeto
gameSystem.name;
gameSystem.games[1];
gameSystem.specs.ram;
const propertyName = "company";
gameSystem[propertyName];
gameSystem["dia de venta"];
//Acceso a los metodos
gameSystem.runGame("Elden Ring");
```

### AGREGAR Y MODIFICAR PROPIEDADES DEL OBJETO

```javascript
const persona = {
  name: "Dani",
};
persona.age = 18; // Agregamos
persona.name = "pepe"; // La cambiamos
delete persona.age; // Eliminamos la propiedad
```

### ATAJOS PARA TRABAJAR CON OBJETOS

```javascript
const name = 'Spidey'
const universe = 42
const spiderman = {
    name, // Hay atajos para evitar repetir llave-valor y no poner name: name
    universe, // Indicamos solo el nombre, js buscara una variable con ese nombre
    powers: ['web', 'invisibility', 'spider-sense']
}

//Leer propiedades de forma sencilla (desestructuracion)
const spiderman = {
    name: 'Spidey'
    universe: 42
    powers: ['web', 'invisibility', 'spider-sense']
}
const { powers, universe } = spiderman // Extrae del objeto las propiedades indicadas se guardan como variables con mismo nombre
const { powerScore = 100 } = spiderman // Si no existe en el objeto le asigna un valor por defecto
const { name: spideyName } = spiderman // Extrae la propiedad y crea una variable con el nombre que le asignamos despues de los dos puntos
```

### ITERANDO OBJETOS EN JAVASCRIPT

```javascript
const spiderman = {
    name: 'Spidey'
    universe: 42
    powers: ['web', 'invisibility', 'spider-sense']
}

for (const property in spiderman) { // name, universe, power
    console.log(spiderman[property])
}

Object.keys() // Crea un array con todos los nombres de las propiedades
Object.values() // Un array con los valores de dichas propiedades
Object.entries() // Equivalente a .items de python. Array de arrays

keys.forEach(key => {
    console.log(spiderman[key])
})
```

### OPERADOR DE ENCADENAMIENTO OPCIONAL

```javascript
const gameSystem = {
    name: 'PS5',
    price: 550,
    specs: {
        cpu: 'AMD RZ2',
        gpu: 'AMD RDNA',
    }
}
gamesystem.specifications.cpu // Specifications no existe, es undefined. Nos da error
// En caso de no saber como es el objeto, o de tener propiedades dinamicas haremos:
if (gameSystem.specifications !== 'undefined') {
    // lo que sea
```
