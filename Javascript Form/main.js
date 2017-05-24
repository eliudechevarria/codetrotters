

var validation = function () {
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var ConfirmPassword = document.getElementById("confirm-password").value;
    var RegistrationSuccesful = true;

    // Validate that all fields have a value.
    if (firstname === "") {
        RegistrationSuccesful = false;
        alert("Escribe tu nombre");
    }

    if (lastname === "") {
        RegistrationSuccesful = false;
        alert("Escribe tu apellido");
    }

    if (email === "") {
        RegistrationSuccesful = false;
        alert("Escribe tu email");
    }

    if (password === "") {
        RegistrationSuccesful = false;
        alert("Escribe tu password");
    }

    // Validate that Password and ConfirmPassword are equal.
    if (password != ConfirmPassword) {
        RegistrationSuccesful = false;
        alert("Passwords don't match!");
    }

    // If all values are correct, display alert with success message.
    if (RegistrationSuccesful === true){
        alert("Registration Success!");
    }
}