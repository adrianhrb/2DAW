document.addEventListener('DOMContentLoaded', () => {
    let links = document.getElementsByTagName('a')
    let linksCounter = links.length
    let penultimate = links[linksCounter - 2]
    let pruebaLink = 'http://prueba'
    let pruebaLinkCounter = 0
    for (let i=0; i<links.length; i++){
        if (links[i].getAttribute('href') == pruebaLink){
            pruebaLinkCounter++
        }
    }
    let linksThirdP = document.getElementsByTagName('p')[2].getElementsByTagName('a').length
})

// Ex. made with query*
document.addEventListener('DOMContentLoaded', () => {
    let links = document.getElementsByTagName('a')
    let linksCounter = links.length
    let penultimate = links[linksCounter - 2]
    let pruebaLink = 'http://prueba'
    let pruebaLinkCounter = 0
    for (let i=0; i<links.length; i++){
        if (links[i].getAttribute('href') == pruebaLink){
            pruebaLinkCounter++
        }
    }
    let linksThirdP = document.querySelectorAll('p')[2].querySelectorAll('a').length
})