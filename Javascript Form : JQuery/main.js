

var validation = function () {
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirm-password').val();

    // var firstName = document.getElementById("first-name").value;
    // var lastName = document.getElementById("last-name").value;
    // var email = document.getElementById("email").value;
    // var password = document.getElementById("password").value;
    // var confirmPassword = document.getElementById("confirm-password").value;
    var registrationSuccessful = true;

    // Validate that all fields have a value.
    if (firstName === "") {
        registrationSuccessful = false;
        // alert("Escribe tu nombre");
        $("#first-name").hide ("#first-name");
    }

    if (lastName === "") {
        registrationSuccessful = false;
        alert("Escribe tu apellido");
    }

    if (email === "") {
        registrationSuccessful = false;
        alert("Escribe tu email");
    }

    if (password === "") {
        registrationSuccessful = false;
        alert("Escribe tu password");
    }

    // Validate that Password and ConfirmPassword are equal.
    if (password != confirmPassword) {
        registrationSuccessful = false;
        alert("Passwords don't match!");
    }

    // If all values are correct, display alert with success message.
    if (registrationSuccessful === true) {
        alert("Registration Success!");
    }
}