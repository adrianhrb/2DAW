function changeImage() {
    var image = document.getElementById('image')
    if (image.src.match('thor')) {
        image.src = 'img/hulk.jpg'
    } else if (image.src.match('hulk')) {
        image.src = 'img/spiderman.jpeg'
    } else {
        image.src = 'img/thor.jpg'
    }
}