$(document).ready(() => {
  $("#enviar").click((e) => {
    if (
      validateNameSurname() &&
      validateAge() &&
      validateDNI() &&
      validateMail() &&
      mailsMatches() &&
      validateAddress() &&
    //   validateDate() &&
      validatePhone() &&
      validatePostal()
    ) {
      confirm("Seguro que quieres enviar el formulario?");
      return true;
    } else {
      e.preventDefault();
    }
  });

  function validateNameSurname() {
    let patern = /^[A-Za-z\s]+/;
    let name = $("#nombre");
    let surname = $("#apellidos");

    if (patern.test(name.val())) {
      if (patern.test(surname.val())) {
        return true;
      } else {
        surname.focus();
        $("#errores").innerHTML = "Error en el apellido";
        return false;
      }
    } else {
      name.focus();
      $("#errores").html('Error en el nombre')
      return false;
    }
  }

  function validateAge() {
    let age = $("#edad");
    let patern = /\d+/;

    if (!patern.test(age.val())) {
      $("#errores").innerHTML = "La edad debe ser un numero";
      return false;
    }

    if (
      parseInt(age.val()) <= 0 ||
      parseInt(age.val()) > 200 ||
      age.val() == ""
    ) {
      age.focus();
      $("#errores").innerHTML = "La edad no está en un rango correcto";
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
    let patern = /^\d{8}-[A-Za-z]$/;
    let dni = $("#nif");

    if (dni.val() == "") {
      dni.focus();
      $("#errores").innerHTML = "El dni es requerido";
      return false;
    }

    if (patern.test(dni.val()) == false) {
      $("#errores").innerHTML = "El dni no sigue un patron correcto";
      dni.focus();
      return false;
    }

    let matchDni = dni.val().toUpperCase().match(/^(\d+)([A-Z])$/);

    if (dniCharCalculator(matchDni[1] != matchDni[2])) {
      $("#errores").innerHTML = "La letra del dni es incorrecta";
      dni.focus();
      return false;
    }

    return true;
  }

  function validateMail() {
    let patern = /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+.[a-z]{2,4}$/;
    let mail = $("email");

    if (!patern.test(mail.val())) {
      $("#errores").innerHTML = "El mail no sigue un patron correcto";
      mail.focus();
      return false;
    }

    return true;
  }

  function mailsMatches() {
    let mail1 = $("#email");
    let mail2 = $("confirmacion");

    if (mail1 != mail2) {
      $("#errores").innerHTML = "Los mails no son iguales";
      mail.focus();
      return false;
    }
  }

  function validateAddress() {
    let address = $("#direccion");

    if (address.val() == "") {
      $("#errores").innerHTML = "Debes añadir una dirección";
      address.focus();
      return false;
    }

    return true;
  }

  //   function validateDate() {
  //     let date = document.getElementById("fecha");
  //     let patern1 = /\d{2}\/\d{2}\/\d{2,4}/;
  //     let patern2 = /\d{2}-\d{2}-\d{2,4}/;

  //     if (date.val() == "") {
  //       $("#errores").innerHTML = "La fecha es un campo requerido";
  //       date.focus();
  //       return false;
  //     }

  //     if (patern1.test(date.val()) == false) {
  //       if (patern2.test(date.val()) == false) {
  //         $("#errores").innerHTML = "La fecha no sigue el formato correcto";
  //         date.focus();
  //         return false;
  //       }
  //     }

  //     return true;
  //   }

  function validatePhone() {
    let patern = /\d{9}/;
    let phone = $("#telefono");

    if (phone.val() == "") {
      $("#errores").innerHTML = "El teléfono es un campo requerido";
      date.focus();
      return false;
    }

    if (!patern.test(phone.val())) {
      $("#errores").innerHTML = "El teléfono debe tener 9 números";
      phone.focus();
      return false;
    }

    return true;
  }

  function validatePostal() {
    let patern = /^\d{5}$/;
    let postal = $("#postal");

    if (postal.val() == "") {
      $("#errores").innerHTML = "El codigo postal es un campo requerido";
      date.focus();
      return false;
    }

    if (!patern.test(postal.val())) {
      $("#errores").innerHTML = "El codigo postal debe tener 5 dígitos";
      hour.focus();
      return false;
    }

    return true;
  }
});
