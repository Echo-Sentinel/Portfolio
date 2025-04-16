const registerForm = document.getElementById("registerForm");
const regUsername = document.getElementById("regUsername");
const regEmail = document.getElementById("regEmail");
const regPassword = document.getElementById("regPassword");
const regConfirmPassword = document.getElementById("regConfirmPassword");

function showToast(message, color = "linear-gradient(to right, #ff5f6d, #ffc371)") {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: color }
    }).showToast();
}

function isStrongPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&]).{8,}$/.test(password);
}

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = regUsername.value.trim();
        const email = regEmail.value.trim();
        const password = regPassword.value.trim();
        const confirmPassword = regConfirmPassword.value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (!/^[a-zA-Z0-9_-]{3,20}$/.test(username)) {
            return showToast("Invalid username! Username must be 3-20 characters.");
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return showToast("Invalid email address!");
        }

        if (!isStrongPassword(password)) {
            return showToast("Password must be at least 8 characters and include uppercase, lowercase, number and special symbol (@#$%&).");
        }

        if (password !== confirmPassword) {
            return showToast("Passwords do not match!");
        }

        const usernameExists = users.find(user => user.username === username);
        const emailExists = users.find(user => user.email === email);

        if (usernameExists || emailExists) {
            return showToast("User with this username or email already exists!");
        }

        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        showToast("Successfully registered!", "linear-gradient(to right, #00b09b, #96c93d)");
        registerForm.reset();
        setTimeout(() => window.location.href = "./login.html", 1000); 
    });
}