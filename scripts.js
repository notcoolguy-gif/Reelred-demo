document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const usernameEmailInput = document.getElementById('usernameEmail');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const usernameEmailError = document.getElementById('usernameEmailError');
    const passwordError = document.getElementById('passwordError');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;
        
        // Clear previous error messages
        usernameEmailError.textContent = '';
        passwordError.textContent = '';

        // Validate Username/Email
        if (!usernameEmailInput.value) {
            usernameEmailError.textContent = 'Please enter your email';
            isValid = false;
        }

        // Validate Password
        if (!passwordInput.value) {
            passwordError.textContent = 'Please enter your password';
            isValid = false;
        }

        if (isValid) {
            // Proceed with form submission or further processing
            alert('Form submitted successfully!');
        }
    });
});
