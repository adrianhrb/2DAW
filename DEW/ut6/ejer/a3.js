document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('input').addEventListener('click', (e) => {
        e.preventDefault()
        let body = document.querySelector('body')

        // Creamos los elementos
        let myDiv = document.createElement('div')
        let formTag = document.createElement('form')

        let nameElement = document.createElement('input')
        let nameLabel = document.createElement('label')
        let nameText = document.createTextNode('Nombre: ')

        let surnameElement = document.createElement('input')
        let surnameLabel = document.createElement('label')
        let surnameText = document.createTextNode('Apellidos: ')

        let email = document.createElement('input')
        let emailLabel = document.createElement('label')
        let emailText = document.createTextNode('Email: ')

        let message = document.createElement('textarea')
        let messageLabel = document.createElement('label')
        let messageText = document.createTextNode('Mensaje: ')
        let subject = document.createElement('input')
        let br = document.createElement('br')

        // Asignamos atributos
        nameLabel.appendChild(nameText)
        myDiv.setAttribute('class', 'container')
        nameElement.setAttribute('type', 'text')
        surnameElement.setAttribute('type', 'text')
        surnameElement.setAttribute('id', 'surname')
        email.setAttribute('type', 'email')
        email.setAttribute('id', 'email')
        message.setAttribute('name', 'message')
        message.setAttribute('id', 'message')
        message.setAttribute('cols', 30)
        message.setAttribute('rows', 10)
        subject.setAttribute('id', 'subject')

        // Definimos estilos y agregamos elementos a otros
        myDiv.style = 'display: grid; align-items:center;justify-content:center'
        formTag.appendChild(nameLabel)
        formTag.appendChild(nameElement)
        formTag.appendChild(document.createElement('br'))
        formTag.appendChild(document.createElement('br'))
        formTag.appendChild(surnameElement)
        formTag.appendChild(document.createElement('br'))
        formTag.appendChild(document.createElement('br'))
        formTag.appendChild(email) 
        formTag.appendChild(document.createElement('br'))
        formTag.appendChild(document.createElement('br'))
        formTag.appendChild(message) 
        formTag.appendChild(document.createElement('br'))
        formTag.appendChild(document.createElement('br'))
        formTag.appendChild(subject)
        myDiv.appendChild(formTag)
        body.appendChild(myDiv)
    })
})