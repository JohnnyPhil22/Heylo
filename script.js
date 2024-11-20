function scrollToHome() {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}

function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

function redirectToSignUp() {
    window.location.href = "signup.html";
}

function redirectToLogin() {
    window.location.href = "login.html";
}

function handleSignUp(event) {
    if (event) {
        event.preventDefault(); // Prevent form submission if called from form
    }

    // Save to mongoDB with hashing (encryption)
    const firstname = document.getElementById("firstname").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple redirect to main page
    window.location.href = "profile.html";
}

function handleLogin(event) {
    if (event) {
        event.preventDefault(); // Prevent form submission if called from form
    }

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Basic frontend validation
    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Simple redirect to main page
    window.location.href = "profile.html";
}

// Add form submit event listener
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }
});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

const notificationBadge = document.querySelector(".notification-badge");
notificationBadge.style.display = "block";
const notificationBtn = document.querySelector(".notification-btn");
const notificationPopup = document.querySelector(".notification-popup");

let notificationCount = 0;

// Update the notification count and display
function updateNotificationCount(count) {
    notificationBadge.dataset.count = count.toString();
    notificationBadge.style.display = count > 0 ? "inline-block" : "none";
    notificationBtn.classList.toggle("has-notifications", count > 0);
}

// Initial notification count
updateNotificationCount(3);

notificationBtn.addEventListener("click", () => {
    notificationCount++;
    if (notificationCount % 2 === 0) {
        notificationPopup.classList.remove("show");
    } else {
        notificationPopup.classList.add("show");
    }
});
