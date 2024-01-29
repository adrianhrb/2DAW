$(document).ready(() => {


  function getProvinces(){    
      fetch('cargarProvinciasJSON.php')
      .then(response => response.json())
      .then(data => {
          Object.keys(data).forEach(prov => {
              let newOption = $(`<option value=${prov}>${data[prov]}</option>`)
              $('#provincia').append(newOption)
          })
      })
  }

  $('#provincia').change((e) => {
      console.log($("#provincias")[0].selectedIndex)
  })
  
  function getTown(id){
      let data = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'provincia=' + id
      }
      
      fetch('cargarMunicipiosJSON.php', data)
      .then(response => response.text())
      .then(data => console.log(data))
  }
  
  getProvinces()

  $("#enviar").click((e) => {
    if (
      validateName() &&
      validateSurname() &&
      validateDNI() &&
      validateAddress() &&
      validatePostal() &&
      validateMail() &&
      mailsMatches()
      ) {
        confirm("Seguro que quieres enviar el formulario?");
        return true;
      } else {
        e.preventDefault();
        return false;
    }
  });

  function validateName() {
    let patern = /^[A-Za-z\s]+$/;
    let name = $("#nombre");

    if (name.val() == "") {
      name.focus();
      $("#errores").html("El nombre es un campo requerido");
      return false;
    }

    if (!patern.test(name.val())) {
      name.focus();
      $("#errores").html("Error en el nombre");
      return false;
    }

    return true;
  }

  function validateSurname() {
    let patern = /^[A-Za-z\s]+$/;
    let surname = $("#apellidos");

    if (surname.val() == "") {
      surname.focus();
      $("#errores").html("El apellido es un campo requerido");
      return false;
    }

    if (!patern.test(surname.val())) {
      surname.focus();
      $("#errores").html("Error en el apellido");
      return false;
    }

    return true;
  }

  function dniCharCalculator(dni) {
    let characters = "TRWAGMYFPDXBNJZSQVHLCKET";
    dni = parseInt(dni);
    let position = dni % (characters.length - 1);
    return characters[position];
  }

  function validateDNI() {
    let patern = /^\d{8}[A-Za-z]{1}$/;
    let dni = $("#nif");

    if (dni.val() == "") {
      dni.focus();
      $("#errores").html("El dni es requerido");
      return false;
    }

    if (!patern.test(dni.val())) {
      $("#errores").html("El dni no sigue un patron correcto");
      dni.focus();
      return false;
    }

    let matchDni = dni
      .val()
      .toUpperCase()
      .match(/^(\d+)([A-Z])$/);

    if (dniCharCalculator(matchDni[1]) != matchDni[2]) {
      $("#errores").html("La letra del dni es incorrecta");
      dni.focus();
      return false;
    }

    return true;
  }

  function validateMail() {
    let patern = /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+.[a-z]{2,4}$/;
    let mail = $("#email");
    let confirmation = $('#confirmacion')

    if (mail.val() == "") {
      $("#errores").html("El mail no puede ser vacio");
      mail.focus();
      return false;
    }

    if (!patern.test(mail.val())) {
      $("#errores").html("El mail no sigue un patron correcto");
      mail.focus();
      return false;
    }

    return true;
  }

  function mailsMatches() {
    let mail1 = $("#email");
    let mail2 = $("#confirmacion");

    if (mail1.val() != mail2.val()) {
      $("#errores").html("Los mails no son iguales");
      mail1.focus();
      return false;
    }
    return true
  }

  function validateAddress() {
    let address = $("#direccion");

    if (address.val() == "") {
      $("#errores").html("Debes añadir una dirección");
      address.focus();
      return false;
    }

    return true;
  }


  function validatePostal() {
    let patern = /^\d{5}$/;
    let postal = $("#postal");

    if (postal.val() == "") {
      $("#errores").html("El codigo postal es un campo requerido");
      postal.focus();
      return false;
    }

    if (!patern.test(postal.val())) {
      $("#errores").html("El codigo postal debe tener 5 dígitos");
      postal.focus();
      return false;
    }

    return true;
  }

  
});
