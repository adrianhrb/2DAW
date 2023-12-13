document.addEventListener('DOMContentLoaded', () => {
    let elements = ['abc', 'def', 'ghi', 'jkl', 'mnñ', 'opq', 'rst', 'uvw', 'xyz']
    document.querySelector('input').addEventListener('click', (e) => {
        e.preventDefault()
        let newTag = document.createElement('li')
        let newElement = document.createTextNode(elements[parseInt(Math.random() * elements.length)])
        newTag.appendChild(newElement)
        document.getElementById('lista').appendChild(newTag)
    })
})