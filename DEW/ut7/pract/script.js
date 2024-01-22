document.addEventListener('DOMContentLoaded', () => {
    let url = 'server.php?url='
    let noticias = document.querySelector('#noticias')
    let createButton = document.querySelector('#crearRSS')
    let select = document.querySelector('#campoSelect')

    // Evento para agregar nuevos RSS con nombre y url
    createButton.addEventListener('click', () => {
        let name = prompt('Como se va a llamar tu nuevo recurso?')
        let newUrl = prompt('Cuál es el link del recurso?')
        let option = new Option(name, newUrl)
        select.appendChild(option)
        sendRequest(url + newUrl)
    })

    // Evento para representar los cambios en el "select"
    select.addEventListener('change', () => {
        let currentOption = select.options[select.selectedIndex]
        
        sendRequest(url + currentOption.value)
    })

    // Petición al servidor con la url del recurso agregada
    function sendRequest(url){
        fetch(url)
        .then(response => response.json())
        .then(data => {
            displayData(data)
        })
    }

    // Función para extraer los datos y representarlos en el div de noticias
    function displayData(data){
        noticias.innerHTML = ''
        data.channel.item.forEach(element => {
            let title = document.createElement('h1')
            let description = document.createElement('p')
            let date = document.createElement('p')
            let link = document.createElement('a')
            title.innerHTML = element.title
            description.innerHTML = element.description
            date.innerHTML = element.pubDate
            link.innerHTML = element.link
            link.href = element.link
            noticias.appendChild(title)
            noticias.appendChild(link)
            noticias.appendChild(description)
            noticias.appendChild(date)
        });
    }
})