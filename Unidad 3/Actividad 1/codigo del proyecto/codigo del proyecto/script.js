document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Cuenta creada existosamente.");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Login successful.");
});

document.getElementById('recoverPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Password recovery email sent.");
});
