$(document).ready(() => {
  $("#enviar").click((e) => {
    e.preventDefault()
    if (
      validateName() &&
      validateSurname() &&
      validateDNI() &&
      validateAddress() &&
      validatePostal() &&
      validateMail() &&
      mailsMatches() &&
      validatePhone() 
    ) {
      confirm("Seguro que quieres enviar el formulario?");
      $('#enviar').submit()
      return true;
    } else {
      return false
    }
  });

  function validateName() {
    let patern = /^[A-Za-z\s]+/;
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
    let patern = /^[A-Za-z\s]+/;
    let surname = $("#apellidos");

    if (surname.val() == "") {
      surnamename.focus();
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
    let mail = $("email");

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
