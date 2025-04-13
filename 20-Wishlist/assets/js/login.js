const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (!username || !password) {
    return showToast("Please fill in all fields", "red");
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!matchedUser) {
    return showToast("Invalid username or password", "red");
  }

  localStorage.setItem("currentUser", JSON.stringify(matchedUser));
  showToast("Login successful!", "green");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
});

function showToast(message, color) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: color,
  }).showToast();
}