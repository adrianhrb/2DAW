document.addEventListener('DOMContentLoaded', () => {
    let char = document.getElementById('char');
    let block = document.getElementById('block');
    let counter = 0;
    let newBlock = 'block'
    
    alert('Vamos a ello!')
    block.classList.add("block")

    const velocity = setInterval(() => {
        block.classList.remove(newBlock)
        counter ++
        newBlock = `block${counter}`
        block.classList.add(newBlock)
    }, 10000)

    if (counter == 3){
        clearTimeout(velocity)
    }

    function jump(){
        char.classList.add("animate")
        setTimeout(function(){
            char.classList.remove("animate")
        },500)
    }

    document.addEventListener('keydown', (e) => {
        if (e.key == ' '){
            jump()
        }
    })
    
    let checkHit = setInterval(function(){
        var charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
        if (blockLeft < 20 && blockLeft > 0 && charTop >= 130){
            alert('Has perdido! :(')
            block.style.animation = 'none';
            block.style.display = 'none';
            if (confirm('quieres volver a jugar?')){
                window.location.reload()
            }
        }

    }, 10) 
})
