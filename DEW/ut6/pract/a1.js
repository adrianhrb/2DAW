document.addEventListener('DOMContentLoaded', () => {
    // Bucle para agregar clase seleccionado a los div que se 
    for (let i=1; i<=6; i++){
        let currentColor = `.color${i}`
        let currentElement = document.querySelector(currentColor)
        // Agregamos evento a todos los colores
        currentElement.addEventListener('click', () => {
            let lastElement = document.querySelector('.seleccionado')
            let lastElementColor = lastElement.getAttribute('class').split(' ')[0]
            let newClass = currentElement.getAttribute('class') + ' seleccionado'
            lastElement.setAttribute('class', lastElementColor)
            currentElement.setAttribute('class', newClass)
        })
    }

    // Insertamos el "tablero" dinamicamente
    let mainDiv = document.querySelector('#zonadibujo')
    mainDiv.style = 'display:grid;grid-template-columns: repeat(40, 0fr);'
    document.querySelector('input').addEventListener('click', () => {
        document.querySelector('input').style = 'display:none' // Ocultamos el boton una vez creado el tablero
        for (let i=1; i<=1600; i++){
            let newElement = document.createElement('div')
            newElement.setAttribute('class', i)
            newElement.style = 'width:10px;height:10px;border:1px solid black'
            mainDiv.appendChild(newElement)
            newElement.addEventListener('click', () => {
                newElement.style = 'width:10px;height:10px;border:1px solid black;background-color:red'
            })
        }
    })
})