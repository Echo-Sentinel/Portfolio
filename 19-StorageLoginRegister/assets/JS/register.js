function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
      Toastify({
        text: "Please fill in all fields",
        backgroundColor: "#e67e22",
        duration: 3000
      }).showToast();
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(u => u.email === email)) {
      Toastify({
        text: "Email already registered",
        backgroundColor: "#c0392b",
        duration: 3000
      }).showToast();
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    Toastify({
      text: "Registration successful",
      backgroundColor: "#2ecc71",
      duration: 3000
    }).showToast();

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  }