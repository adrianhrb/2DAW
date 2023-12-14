document.addEventListener('DOMContentLoaded', () => {
    // Bucle para agregar clase seleccionado a los div que se 
    for (let i=1; i<=6; i++){
        let currentColor = `.color${i}`
        let currentElement = document.querySelector(currentColor)
        // Agregamos evento para la seleccion de colores
        currentElement.addEventListener('click', () => {
            let lastElement = document.querySelector('.seleccionado')
            let lastElementColor = lastElement.getAttribute('class').split(' ')[0]
            let newClass = currentElement.getAttribute('class') + ' seleccionado'
            lastElement.setAttribute('class', lastElementColor)
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

    // Funcion para crear el tablero
    function createBoard() {
        for (let i=1; i<=1600; i++){
            let newElement = document.createElement('div')
            newElement.setAttribute('class', i)
            newElement.setAttribute('id', 'pixel')
            newElement.style = 'width:10px;height:10px;border:1px solid black'
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

    // Insertamos el "tablero" dinamicamente y agregamos los eventos a los "pixeles del tablero"
    let mainDiv = document.querySelector('#zonadibujo')
    mainDiv.style = 'display:grid;grid-template-columns: repeat(40, 0fr);'
    document.querySelector('#create').addEventListener('click', () => {
        document.querySelector('input').style = 'display:none' // Ocultamos el boton una vez creado el tablero
        let clearButton = document.createElement('input')
        clearButton.value = 'Limpiar tablero'
        clearButton.type = 'button'
        clearButton.id = 'clear'
        document.querySelector('#button').appendChild(clearButton) // Agregamos el boton para limpiar el tablero
        createBoard()
        clearButton.addEventListener('click', () => {
            let allPixels = document.querySelectorAll('#pixel')
            allPixels.forEach(pixel => {
                pixel.style = 'width: 10px; height: 10px; border: 1px solid black; background-color: white'
            })
            document.querySelector('#pincel').innerHTML = 'Haz click y manten pulsado para pintar varios pixeles'
        })
    })
})