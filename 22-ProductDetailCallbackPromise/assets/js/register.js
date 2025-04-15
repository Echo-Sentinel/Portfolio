const formRegister = document.getElementById("registerForm");
const inputUsername = document.getElementById("regUsername");
const inputEmail = document.getElementById("regEmail");
const inputPassword = document.getElementById("regPassword");
const inputConfirmPassword = document.getElementById("regConfirmPassword");

function displayToast(message, color = "linear-gradient(to right, #ff5f6d, #ffc371)") {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: color }
    }).showToast();
}

function validatePasswordStrength(pass) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&]).{8,}$/.test(pass);
}

if (formRegister) {
    formRegister.onsubmit = (event) => {
        event.preventDefault();

        const username = inputUsername.value.trim();
        const email = inputEmail.value.trim();
        const password = inputPassword.value;
        const confirmPassword = inputConfirmPassword.value;

        const registeredUsers = JSON.parse(localStorage.getItem("users")) || {};

        if (!/^[a-zA-Z0-9_-]{3,20}$/.test(username)) {
            return displayToast("Invalid username format");
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return displayToast("Invalid email address");
        }

        if (!validatePasswordStrength(password)) {
            return displayToast("Password must be stronger");
        }

        if (password !== confirmPassword) {
            return displayToast("Passwords do not match");
        }

        if (registeredUsers[username] || Object.values(registeredUsers).some(user => user.email === email)) {
            return displayToast("Username or email already exists");
        }

        registeredUsers[username] = { email, password };
        localStorage.setItem("users", JSON.stringify(registeredUsers));

        displayToast("Successfully registered!", "linear-gradient(to right, #00b09b, #96c93d)");
        formRegister.reset();

        setTimeout(() => window.location.href = "./login.html", 1000);
    };
}

