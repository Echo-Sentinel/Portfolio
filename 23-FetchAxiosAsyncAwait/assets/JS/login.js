const loginForm = document.getElementById("loginForm");
const loginUsernameOrEmail = document.getElementById("loginUsernameOrEmail");
const loginPassword = document.getElementById("loginPassword");

function showToast(message, color = "linear-gradient(to right, #ff5f6d, #ffc371)") {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: color }
    }).showToast();
}

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const identifier = loginUsernameOrEmail.value.trim();
        const password = loginPassword.value.trim();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const failedAttempts = JSON.parse(localStorage.getItem("failedAttempts")) || {};

        const user = users.find(u => u.username === identifier || u.email === identifier);

        if (!user) {
            return showToast("No user found with that username or email!");
        }

        const usernameKey = user.username;

        if (failedAttempts[usernameKey] && failedAttempts[usernameKey].lockedUntil > Date.now()) {
            return showToast("Account is locked. Please try again later.");
        }

        if (user.password === password) {
            localStorage.setItem("currentUser", usernameKey);
            delete failedAttempts[usernameKey];
            localStorage.setItem("failedAttempts", JSON.stringify(failedAttempts));
            showToast("Login successful!", "linear-gradient(to right, #00b09b, #96c93d)");
            loginForm.reset();
            setTimeout(() => window.location.href = "../index.html", 1000);
        } else {
            if (!failedAttempts[usernameKey]) {
                failedAttempts[usernameKey] = { count: 1, lockedUntil: null };
            } else {
                failedAttempts[usernameKey].count++;
            }

            if (failedAttempts[usernameKey].count >= 5) {
                failedAttempts[usernameKey].lockedUntil = Date.now() + 15 * 60 * 1000; // 15 minutes
                showToast("Too many failed attempts. Account locked for 15 minutes!");
            } else {
                showToast("Incorrect password! Attempts: " + failedAttempts[usernameKey].count);
            }

            localStorage.setItem("failedAttempts", JSON.stringify(failedAttempts));
        }
    });
}