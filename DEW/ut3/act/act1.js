function openFormWindow() {
    window.open('actsub1.html', 'form', 'height=700px,width=600px')
}


function confirmData(){
    if (window.confirm('Enviar datos?')){
        sendData()
    }
    else {
        alert('No se enviaran los datos')
    }
}


function sendData(){
    var name = document.getElementById('name').value
    var surname = document.getElementById('surname').value
    var postal = document.getElementById('num').value
    var street = document.getElementById('street').value
    var mun = document.getElementById('mun').value
    var direction = 'Calle ' + street + ', en ' + mun + ' CP: ' + postal
    window.opener.document.getElementById('nombre').value = name
    window.opener.document.getElementById('apellido').value = surname
    window.opener.document.getElementById('direccion').value = direction
    window.close()
}