// Configuration
const loginPageURL = "index.html"; // Replace with the path to your login page

// Check if the page was reloaded
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    // Redirect to the login page if the page was reloaded
    window.location.href = loginPageURL;
}
