// Predefined login credentials
const users = [
  { username: "admin", password: "Brio@2024#*" },
  { username: "sayeed", password: "Brio@2024#*" }, // Add more users as needed
  { username: "afash", password: "Brio@2024#*" }, // Comma added here
  { username: "venkatesh", password: "Brio@2024#*" }, // Comma added here
  { username: "mallesh", password: "Brio@2024#*" }, // Comma added here
  { username: "ibrahim", password: "Brio@2024#*" }, // Comma added here
  { username: "nandhini", password: "Brio@2024#*" }, // Comma added here
  { username: "venu", password: "Brio@2024#*" }, // Comma added here
  { username: "vinod", password: "Brio@2024#*" }, // Comma added here
  { username: "haji", password: "Brio@2024#*" }, // Comma added here
  { username: "vignesh", password: "Brio@2024#*" } // Last object doesn't need a comma
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
