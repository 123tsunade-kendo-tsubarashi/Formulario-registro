
var form = document.querySelector("form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirm-password");
var termsInput = document.getElementById("terms");


function validateForm() {
  
  var errors = [];

  
  if (nameInput.value.trim() === "") {
    errors.push("El nombre es obligatorio");
  }

  
  if (emailInput.value.trim() === "") {
    errors.push("El correo electrónico es obligatorio");
  } else if (!emailInput.value.includes("@")) {
    errors.push("El correo electrónico no es válido");
  }

  
  if (passwordInput.value.trim() === "") {
    errors.push("La contraseña es obligatoria");
  } else if (passwordInput.value.length < 8) {
    errors.push("La contraseña debe tener al menos 8 caracteres");
  }

  
  if (confirmPasswordInput.value.trim() === "") {
    errors.push("La confirmación de la contraseña es obligatoria");
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    errors.push("Las contraseñas no coinciden");
  }

  
  if (!termsInput.checked) {
    errors.push("Debes aceptar los términos y condiciones");
  }

  
  return errors;
}


function showMessage(message, type) {
  
  var p = document.createElement("p");

  
  p.textContent = message;

  
  if (type === "error") {
    p.className = "error";
  } else if (type === "success") {
    p.className = "success";
  }

  
  form.parentNode.insertBefore(p, form);

  
  setTimeout(function() {
    p.remove();
  }, 3000);
}


form.addEventListener("submit", function(event) {
  
  event.preventDefault();

  
  var errors = validateForm();

  
  if (errors.length > 0) {
    
    showMessage(errors[0], "error");
  } else {
    
    showMessage("El formulario se ha enviado correctamente", "success");

    
    form.submit();
  }

});

<script src="formulario.js"></script>
