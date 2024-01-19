document.addEventListener('DOMContentLoaded', () => {
    let rssUrl = 'https://www.eldia.es/rss/section/12502'
    let url = 'server.php?rssUrl=' + rssUrl

    fetch(url)
    .then(response => response.json())
    .then(data => {
        for(var i=0;data.length;i++){
            displayData(data.item[i])
        }
    })

    function displayData(object){
        let title = object.title
        let link = object.link
        let description = object.description
        let date = object.lastBuildDate
        let divElement = document.querySelector('#datos')
        divElement.innerHTML = `<p>${title}</p><p>${link}</p><p>${description}</p><p>${date}</p>`

    }
})