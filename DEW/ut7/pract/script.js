document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('rssInfo', JSON.stringify([]))
    let url = 'server.php?url='
    let noticias = document.querySelector('#noticias')
    let createButton = document.querySelector('#crearRSS')
    let deleteButton = document.querySelector('#borrarRSS')
    let select = document.querySelector('#campoSelect')

    // Evento para agregar nuevos RSS con nombre y url
    createButton.addEventListener('click', () => {
        let name = prompt('Como se va a llamar tu nuevo recurso?')
        let newUrl = prompt('Cuál es el link del recurso?')
        let option = new Option(name, newUrl)
        select.appendChild(option)
        select.selectedIndex = option.index
        sendRequest(url + newUrl, name)
    })

    // Evento para la eliminación de un RSS
    deleteButton.addEventListener('click', () => {
        let currentRSS = select.options[select.selectedIndex]
        select.removeChild(currentRSS)
        deleteRssFromMemory(currentRSS.text)
        showFirstRssElement()
    })

    // Evento para representar los cambios en el "select"
    select.addEventListener('change', () => {
        let currentOption = select.options[select.selectedIndex]
        loadFromLocalStorage(currentOption.text)
    })

    // Borrar el rss de localstorage
    function deleteRssFromMemory(name){
        let element = JSON.parse(localStorage.getItem('rssInfo'))
        for(let i=0; i<element.length; i++){
            if(element[i].name == name){
                element.splice(i, 1)
                break
            }
        }
        localStorage.setItem('rssInfo', JSON.stringify(element))
    }

    function showFirstRssElement(){
        let element = JSON.parse(localStorage.getItem('rssInfo'))
        let options = select.options
        for(let i=0; i<options.length;i++){
            if(options[i].text == element[0].name){
                select.selectedIndex = options[i].index
                break
            }
        }
        loadFromLocalStorage(element[0].name)
    }

    // Petición al servidor con la url del recurso agregada
    function sendRequest(url, name){
        fetch(url)
        .then(response => response.json())
        .then(data => {
            saveOnLocalStorage(name, data.channel.item)
            displayData(data.channel.item)
        })
    }

    // Función para guardar la información en localstorage
    function saveOnLocalStorage(name, data){
        let info = JSON.parse(localStorage.getItem('rssInfo'))
        info.push({name: name, data: JSON.stringify(data)})
        localStorage.setItem('rssInfo', JSON.stringify(info))
    }

    // Función para cargar la información desde localstorage y no
    // lanzar peticiones de más al servidor
    function loadFromLocalStorage(name){
        let element = JSON.parse(localStorage.getItem('rssInfo'))
        for(let i=0; i<element.length; i++){
            if(element[i].name == name){
                displayData(JSON.parse(element[i].data))
                break
            }
        }
    }
    
    // Función para extraer los datos y representarlos en el div de noticias
    function displayData(data){
        noticias.innerHTML = ''
        data.forEach(element => {
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