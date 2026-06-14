// login page
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("pass").value.trim();
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email");
            return;
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }
        alert("Login Successful");
    });
});
// signup page
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    const emailError = document.getElementById("email-error");
    const passError = document.getElementById("pass-error");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("pass").value.trim();
        if (!email || !password) {
            emailError.style.display = "block";
            emailError.textContent = "Please fill all fields";

            passError.style.display = "block";
            passError.textContent = "Please fill all fields";
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            emailError.style.display = "block";
            emailError.textContent ="Please enter a valid email";
            return;
        }
        if (password.length < 8) {
            passError.style.display = "block";
            passError.textContent ="Password must be at least 8 characters";
            return;
        }
        emailError.style.display = "none";
        passError.style.display = "none";
        alert("SignUp Successful");
    });
});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthSelect = document.getElementById("month");
months.forEach(month => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
});

