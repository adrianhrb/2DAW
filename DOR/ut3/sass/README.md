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
