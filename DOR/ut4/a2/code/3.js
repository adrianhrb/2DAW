document.addEventListener('DOMContentLoaded', () => {
    function init(){
        var allImg = document.getElementsByTagName('img')
        for (let i=0; i < allImg.length; i++){
            if (allImg[i].getAttribute('data-src')){
                allImg[i].setAttribute('src', allImg[i].getAttribute('data-src'))
            }
        }
    }
    init()
})