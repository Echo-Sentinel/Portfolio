const authArea = document.getElementById("authArea");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  const logoutDiv = document.createElement("div");
  const logoutBtn = document.createElement("button");
  logoutBtn.className = "btn";
  logoutBtn.textContent = "Logout";

  logoutBtn.onclick = () => {
    localStorage.removeItem("currentUser");
    Toastify({
      text: "You have been logged out",
      backgroundColor: "#e74c3c",
      duration: 3000
    }).showToast();
    setTimeout(() => {
      location.reload();
    }, 1000);
  };

  logoutDiv.appendChild(logoutBtn);
  authArea.appendChild(logoutDiv);
} else {
  const wrapper = document.createElement("div");
  wrapper.className = "dropdown-wrapper";
  wrapper.style.marginRight = "15px";

  const loginBtn = document.createElement("button");
  loginBtn.className = "btn";
  loginBtn.textContent = "Login";

  const dropdown = document.createElement("div");
  dropdown.className = "dropdown";

  const loginLink = document.createElement("a");
  loginLink.href = "login.html";
  loginLink.textContent = "Login";

  const registerLink = document.createElement("a");
  registerLink.href = "register.html";
  registerLink.textContent = "Register";

  dropdown.appendChild(loginLink);
  dropdown.appendChild(registerLink);

  wrapper.appendChild(loginBtn);
  wrapper.appendChild(dropdown);
  authArea.appendChild(wrapper);

  loginBtn.addEventListener("click", () => {
    const isVisible = dropdown.style.display === "flex";
    dropdown.style.display = isVisible ? "none" : "flex";
  });

  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
}