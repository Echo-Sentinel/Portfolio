const formLogin = document.getElementById("loginForm");

function displayToast(message, background = "linear-gradient(to right, #ff5f6d, #ffc371)") {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background }
    }).showToast();
}

if (formLogin) {
    formLogin.onsubmit = function (event) {
        event.preventDefault();

        const userInput = loginUsernameOrEmail.value.trim();
        const passInput = loginPassword.value;

        const registeredUsers = JSON.parse(localStorage.getItem("users")) || {};
        const attemptHistory = JSON.parse(localStorage.getItem("failedAttempts")) || {};

        const foundUser = Object.entries(registeredUsers).find(([key, value]) =>
            key === userInput || value.email === userInput
        );

        if (!foundUser) return displayToast("User not found!");

        const [userKey, userData] = foundUser;

        if (attemptHistory[userKey] && attemptHistory[userKey].lockedUntil > Date.now()) {
            return displayToast("Blocked for 5 minutes!");
        }

        if (userData.password === passInput) {
            localStorage.setItem("currentUser", userKey);
            attemptHistory[userKey] = null;
            localStorage.setItem("failedAttempts", JSON.stringify(attemptHistory));
            displayToast("Login successful!", "linear-gradient(to right, #00b09b, #96c93d)");
            formLogin.reset();
            setTimeout(() => window.location.href = "../index.html", 1000);
        } else {
            if (!attemptHistory[userKey]) {
                attemptHistory[userKey] = { count: 1, lockedUntil: null };
            } else {
                attemptHistory[userKey].count++;
            }

            if (attemptHistory[userKey].count >= 5) {
                attemptHistory[userKey].lockedUntil = Date.now() + 10 * 60 * 1000;
                displayToast("Account locked for 10 minutes!");
            } else {
                displayToast("Incorrect password!");
            }

            localStorage.setItem("failedAttempts", JSON.stringify(attemptHistory));
        }
    };
}

