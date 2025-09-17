// Part 1: Event Handling Example
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetMsg");

greetBtn.addEventListener("click", () => {
  greetMsg.textContent = "Hello! Thanks for clicking. 🎉";
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// FAQ Section (Collapsible)
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting immediately

  let valid = true;

  // Clear old errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = " Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = " Enter a valid email.";
    valid = false;
  }

  // Password validation (min 6 chars)
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = " Password must be at least 6 characters.";
    valid = false;
  }

  // Success Message
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
