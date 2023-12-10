# EJEMPLOS DIRECTIVAS SASS

### @if
```scss
$dark-theme: true;
body{
    @if $dark-theme{
        background-color: black;
        color: #fff;
    } @else {
        background-color: #fff;
        color: black;
    }
}
```

### @for
```scss
$buttons: 5;
.container {
    width: 100%;
    @for $i through $buttons {
        .button-#{$i} {
            padding: 10px;
            font-size: 12px;
        }
    }
}  
```

### @each

#### Iterar sobre una "lista:

```scss
$colors: red, blue, green, yellow;

@each $color in $colors {
    .button-#{$color}{
        color: $color;
    }
}
```

#### Iterar sobre un "diccionario":

```scss
$themes: (
  primario: #3498db,
  secundario: #2ecc71,
  resaltado: #e74c3c
);

@each $name, $color in $themes {
  .tema-#{$name} {
    color: $color;
  }
}

```

#### Iterar con varios elementos sobre la marcha:
```scss
.container{
    @each $property, $value in (color:red, background:#333, border:1px solid black) {
    #{$property}: $value
    }
}

```

### @while
```scss
$contador: 1;

@while $contador <= 5 {
    .button-#{$contador} {
        width: 50px * $contador;
        height: 50px * $contador;
    }
    $contador: $contador + 1;
}

```

### @mixin
El mixin es util cuando se quieren reutilizar estilos y aplicar a ellos variables
```scss
@mixin button-styles($color, $rem) {
    background-color: $color;
    color: #fff;
    padding: $rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button-primary{
    @include button-styles(#3498db, 1);
}

.button-secondary{
    @include button-styles(#2ecc71, 1.3);
}

```

### @import
El import es bastante util para separar nuestros estilos en varios ficheros y luego unirlos todos en uno. Tambien sirve para importar variables.  

A los ficheros parciales, por convencion se les suele poner un _ al principio para diferenciarlo de los archivos principales a ser compilados.
#### Fichero para estilo de botones (_buttons.scss)
```scss
.buttons {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

```

#### Fichero principal
```scss
@import 'buttons.scss'

body{
    background: red;
}
```

### @extend
Se utiliza pra heredar estilos de unos elementos a otros
```scss
.base-button{
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.primary-button{
    @extend .base-button;
    font-weight: bold;
}

.secondary-button {
    @extend .base-button;
    background-color: #2ecc71;
}
```

### Referencias al selector padre
#### Pseudo-clases
```scss
.mybutton{
    padding: 10px;

    &:hover{
        background-color: red;
    }

    &:active {
        color: #fff;
    }
}
```
#### Clases anidadas
```scss
.case {
  padding: 20px;
  
  &.red {
    background-color: #e74c3c;
    color: #fff;
  }

  &.green {
    background-color: #2ecc71;
    color: #fff;
  }
}
```

#### Referencias con bucles
```scss
.element {
  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      font-size: 10px * $i;
    }
  }
}
```

### Anidamiento
```scss
nav {
    background: #333;

    ul{
        list-display: none;
        padding: 0;
        li{
            display: inline-block;
            a{
                text-decoration: none;
            }
        }
    }
}
```