function redirectToSignup() {
    window.location.href = "signup.html";
}

function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful!");
        // Here, call Firebase Authentication or login API
    } else {
        alert("Please enter both email and password.");
    }
}

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
