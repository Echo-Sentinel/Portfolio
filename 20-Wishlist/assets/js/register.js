const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmpassword");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!name || !username || !email || !password || !confirmPassword) {
    return showToast("Please fill in all fields", "red");
  }

  if (!validateEmail(email)) {
    return showToast("Invalid email format", "orange");
  }

  if (password.length < 6) {
    return showToast("Password must be at least 6 characters", "orange");
  }

  if (password !== confirmPassword) {
    return showToast("Passwords do not match", "red");
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const emailExists = users.some((user) => user.email === email);
  const usernameExists = users.some((user) => user.username === username);

  if (emailExists) {
    return showToast("Email is already registered", "red");
  }

  if (usernameExists) {
    return showToast("Username is already taken", "red");
  }

  const newUser = {
    id: crypto.randomUUID(),
    name,
    username,
    email,
    password,
    wishlist: [],
    cart: [],
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  showToast("Registration successful!", "green");

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});

function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email.toLowerCase());
}

function showToast(message, color) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: color,
  }).showToast();
}