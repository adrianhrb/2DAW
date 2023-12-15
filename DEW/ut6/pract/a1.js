document.addEventListener('DOMContentLoaded', () => {
    // Bucle para agregar clase "seleccionado" a los div del color a elegir
    for (let i=1; i<=6; i++){
        let currentColor = `.color${i}`
        let currentElement = document.querySelector(currentColor)
        // Agregamos evento para la seleccion de colores
        currentElement.addEventListener('click', () => {
            let lastElement = document.querySelector('.seleccionado')
            let lastElementColor = lastElement.getAttribute('class').split(' ')[0]
            let newClass = currentElement.getAttribute('class') + ' seleccionado'
            lastElement.setAttribute('class', lastElementColor) // Eliminamos "seleccionado" al último elemento
            currentElement.setAttribute('class', newClass)
        })
    }

    //Funcion para cambiar el color del elemento
    function changeColor(element){
        let currentSelected = document.querySelector('.seleccionado')
        let style = window.getComputedStyle(currentSelected) // Extraemos los estilos CSS
        let colorSelected = style.getPropertyValue('background-color') // Accedemos al color
        element.style.backgroundColor = `${colorSelected}`
    }

    // Funcion para crear el tablero y agregar eventos a los píxeles
    function createBoard(boardSize) {
        let size = boardSize * boardSize
        for (let i=1; i<=size; i++){
            let newElement = document.createElement('div')
            newElement.setAttribute('class', i)
            newElement.setAttribute('id', 'pixel')
            newElement.style = 'width:15px;height:15px;border:1px solid black'
            mainDiv.appendChild(newElement)
            // Evento para la primera pulsacion
            newElement.addEventListener('mousedown', () => {
                isDrawing = true
                document.querySelector('#pincel').innerHTML = 'Estas pintando'
                changeColor(newElement)
            })
            // Evento para cuando se mantiene pulsado el raton
            newElement.addEventListener('mousemove', () => {
                if (isDrawing){
                    changeColor(newElement)
                }
            })
            // Evento para cuando se deja de pulsar el raton
            newElement.addEventListener('mouseup', () => {
                isDrawing = false
                document.querySelector('#pincel').innerHTML = 'No estas pintando'
            });
        }
    }

    // Evento para el botón de crear 
    let mainDiv = document.querySelector('#zonadibujo')
    document.querySelector('#create').addEventListener('click', () => { // Agregamos el evento al botón de crear tablero
        let boardSize = parseInt(prompt('De cuanto quieres el tablero? Indicar solo un nº (Ej: 40)'))
        mainDiv.style = `display:grid;grid-template-columns: repeat(${boardSize}, 0fr);` // Ordenamos por columnas según las que indique el usuario
        document.querySelector('input').style = 'display:none' // Ocultamos el boton una vez creado el tablero

        // Creamos e insertamos al documento los bototnes para limpiar y resetear
        let clearButton = document.createElement('input')
        let resetButton = document.createElement('input')
        resetButton.value = 'Resetear'
        resetButton.type = 'button'
        resetButton.id = 'reset'
        clearButton.value = 'Limpiar tablero'
        clearButton.type = 'button'
        clearButton.id = 'clear'
        document.querySelector('#button').appendChild(clearButton) 
        document.querySelector('#button').appendChild(resetButton)

        // Agregamos eventos a los botones
        clearButton.addEventListener('click', () => {
            let allPixels = document.querySelectorAll('#pixel')
            allPixels.forEach(pixel => {
                pixel.style = 'width: 15px; height: 15px; border: 1px solid black; background-color: white'
            })
            document.querySelector('#pincel').innerHTML = 'Haz click y manten pulsado para pintar varios pixeles'
        })
        resetButton.addEventListener('click', () => {
            location.reload()
        })

        createBoard(boardSize) // Finalmente llamamos a la función para crear el tablero
    })
})