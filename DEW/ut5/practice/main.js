document.addEventListener('DOMContentLoaded', () => {
    intentos = 0
    let nameInput = document.getElementById('nombre')
    let surname = document.getElementById('apellidos')
    let dni = document.getElementById('nif')
    let sendButton = document.getElementById('enviar')

    nameInput.addEventListener('blur', function (){
        nameInput.value = nameInput.value.toUpperCase()
    });

    surname.addEventListener('blur', function (){
        surname.value = surname.value.toUpperCase()
    });

    nif.addEventListener('blur', function (){
        nif.value = nif.value.toUpperCase()
    });

    sendButton.addEventListener('click', (e) => {
        if (validateNameSurname() && validateAge() && validateDNI() && validateMail() && validateProvince() && validateDate() && validatePhone() && validateHour()){
            confirm('Seguro que quieres enviar el formulario?')
            intentos = 0
            return true
        } else {
            intentos += 1
            document.cookie = 'intentos=' + encodeURIComponent(intentos)
            let attempts = document.cookie.split(';')[0].split('=')[1]
            document.getElementById('intentos').innerHTML = 'Hasta el momentos llevas ' + attempts + ' intentos'
            e.preventDefault()
            return false
        }
    });

    function validateNameSurname(){
        let patern = /^[A-Za-z]+/;
        let name = document.getElementById('nombre')
        let surname = document.getElementById('apellidos')

        if (patern.test(name.value)){
            if(patern.test(surname.value)){
                return true
            } else {
                surname.focus()
                document.getElementById('errores').innerHTML = 'Error en el apellido'
                return false
            }
        
        } else{
                name.focus()
                document.getElementById('errores').innerHTML = 'Error en el nombre'
                return false
        }
    }

    function validateAge(){
        let age = document.getElementById('edad')
        let patern = /\d+/

        if (patern.test(age.value) == false){
            document.getElementById('errores').innerHTML = 'La edad debe ser un numero'
            return false
        }

        if (parseInt(age.value) <= 0 || parseInt(age.value) > 105 || age.value == ''){
            age.focus()
            document.getElementById('errores').innerHTML = 'La edad no es correcta'
            return false
        }

        return true
    }

    function validateDNI(){
        let patern = /^\d{8}-[A-Za-z]$/
        let dni = document.getElementById('nif')

        if (dni.value == ''){
            dni.focus()
            document.getElementById('errores').innerHTML = 'El dni es requerido'
            return false
        }

        if (patern.test(dni.value) == false){
            document.getElementById('errores').innerHTML = 'El dni no sigue un patron correcto'
            dni.focus()
            return false
        }

        return true
    }

    function validateMail(){
        let patern = /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+.[a-z]{2,4}$/
        let mail = document.getElementById('email')

        if(patern.test(mail.value) == false){
            document.getElementById('errores').innerHTML = 'El mail no sigue un patron correcto'
            mail.focus()
            return false
        }

        return true
    }

    function validateProvince(){
        let province = document.getElementById('provincia')

        if (province.value == '0'){
            document.getElementById('errores').innerHTML = 'Debes seleccionar una provincia'
            province.focus()
            return false
        }

        return true
    }

    function validateDate(){
        let date = document.getElementById('fecha')
        let patern1 = /\d{2}\/\d{2}\/\d{2,4}/
        let patern2 = /\d{2}-\d{2}-\d{2,4}/

        if (date.value == ''){
            document.getElementById('errores').innerHTML = 'La fecha es un campo requerido'
            date.focus()
            return false
        }

        if (patern1.test(date.value) == false){
            if (patern2.test(date.value) == false){
                document.getElementById('errores').innerHTML = 'La fecha no sigue el formato correcto'
                date.focus()
                return false
            }
        }

        return true
    }

    function validatePhone(){
        let patern = /\d{9}/
        let phone = document.getElementById('telefono')

        if (phone.value == ''){
            document.getElementById('errores').innerHTML = 'El teléfono es un campo requerido'
            date.focus()
            return false
        }

        if (patern.test(phone.value) == false){
            document.getElementById('errores').innerHTML = 'El teléfono debe tener 9 números'
            phone.focus()
            return false
        }

        return true
    }

    function validateHour(){
        let patern = /^\d{2}:\d{2}$/
        let hour = document.getElementById('hora')

        if (hour.value == ''){
            document.getElementById('errores').innerHTML = 'La hora es un campo requerido'
            date.focus()
            return false
        }

        if (patern.test(hour.value) == false){
            document.getElementById('errores').innerHTML = 'La hora debe seguir el formato HH:MM'
            hour.focus()
            return false
        }

        return true
    }
})