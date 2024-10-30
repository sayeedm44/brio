// Predefined login credentials
const users = [
  { username: "admin", password: "Brio@2024#*" },
  { username: "sayeed", password: "Brio@2024#*" }, // Add more users as needed
  { username: "afash", password: "Brio@2024#*" }
  { username: "venkatesh", password: "Brio@2024#*" }
  { username: "mallesh", password: "Brio@2024#*" }
  { username: "ibrahim", password: "Brio@2024#*" }
  { username: "nandhini", password: "Brio@2024#*" }
  { username: "venu", password: "Brio@2024#*" }
  { username: "vinod", password: "Brio@2024#*" }
  { username: "haji", password: "Brio@2024#*" }
  { username: "vignesh", password: "Brio@2024#*" }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Check credentials against multiple users
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // Set logged-in flag in local storage
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Invalid username or password";
  }
}

