// define variables here
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const loginForm = document.getElementById("loginForm");
const submitLogin = document.getElementById("submitLogin");

function toastMessage(message) {
  // Create toast message
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.top = "30px";
  toast.style.right = "30px";
  toast.style.background = "rgba(40, 44, 52, 0.95)";
  toast.style.color = "#fff";
  toast.style.padding = "16px 32px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
  toast.style.fontSize = "1rem";
  toast.style.fontFamily = "system-ui, sans-serif";
  toast.style.zIndex = "9999";
  toast.style.letterSpacing = "0.02em";
  toast.style.transition = "opacity 0.3s";
  toast.style.opacity = "1";
  document.body.appendChild(toast);

  // Remove toast after 3 seconds
  setTimeout(function () {
    toast.remove();
  }, 3000);
}

function basicValidation(nameInput, emailInput) {
  // Check if name input is empty
  if (nameInput.value.trim() === "") {
    alert("Name is required.");
  } else if (emailInput.value.trim() === "") {
    alert("Email is required.");
  }
  //email validation here:
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    alert("Please enter a valid email address.");
  }
  return 1;
}

// add event listener to the form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission
  if (basicValidation(nameInput, emailInput)) {
    // If validation passes, show toast message
    toastMessage("Login successful! Welcome, " + nameInput.value + ".");
    loginForm.reset(); // reset the form
  }
});
