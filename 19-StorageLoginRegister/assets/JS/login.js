function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      Toastify({
        text: "Login successful",
        backgroundColor: "#27ae60",
        duration: 3000
      }).showToast();

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      Toastify({
        text: "Invalid email or password",
        backgroundColor: "#e74c3c",
        duration: 3000
      }).showToast();
    }
  }