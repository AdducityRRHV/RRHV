// Predefined credentials
const VALID_USERNAME = "RRHV";
const VALID_PASSWORD = "1234";

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        alert("Login successful!");
        // Redirect to a new webpage or perform any desired action
        window.location.href = "newpage.html";
    } else {
        document.getElementById("error-message").classList.remove("hidden");
    }
});
