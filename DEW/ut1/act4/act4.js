function trueFunct(word, result) {
    var text = document.getElementById(word);
    var res = document.getElementById(result);
    text.style.color = 'green';
    res.style.color = 'green';
    res.innerHTML = 'Correcto';
}

function falseFunct(word, result) {
    var text = document.getElementById(word);
    var res = document.getElementById(result);
    text.style.color = 'red';
    res.style.color = 'red';
    res.innerHTML = 'Error';
    
}