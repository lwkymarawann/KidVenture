document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginToggle = document.getElementById('login-toggle');
    const registerToggle = document.getElementById('register-toggle');

    function toggleLogin() {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginToggle.classList.add('active');
        registerToggle.classList.remove('active');
    }

    function toggleRegister() {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        registerToggle.classList.add('active');
        loginToggle.classList.remove('active');
    }

    loginToggle.addEventListener('click', toggleLogin);
    registerToggle.addEventListener('click', toggleRegister);

    // Handle login
    window.login = function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        // Add login logic here (e.g., authenticate with server)
        console.log(`Logging in with email: ${email} and password: ${password}`);
        // Redirect to home page on successful login
        window.location.href = 'index.html';
    };

    // Handle registration
    window.register = function(event) {
        event.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        // Add registration logic here (e.g., send data to server)
        console.log(`Registering with name: ${name}, email: ${email}, and password: ${password}`);
        // Redirect to home page on successful registration
        window.location.href = 'index.html';
    };
});
