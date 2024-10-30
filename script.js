// Predefined login credentials
const validUsername = "admin";
const validPassword = "Brio@2024#*";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Check credentials
  if (username === validUsername && password === validPassword) {
    // Set logged-in flag in local storage
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Invalid username or password";
  }
}

