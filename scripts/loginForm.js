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
// generate an alert toast message when problem is with input fields/validation 
function alertToastMessage(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.top = "30px";
    toast.style.right = "30px";
    toast.style.background = "#e74c3c"; // red background for alert
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
    toast.style.border = "1px solid #c0392b";
    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);
}
function basicValidation(nameInput, emailInput) {
  // Check if name input is empty
  if (nameInput.value.trim() === "") {
    alertToastMessage("Name is required.");
    return false;
  } else if (emailInput.value.trim() === "") {
    alertToastMessage("Email is required.");
    return false;
  }
  //email validation here:
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  
// Only allow emails ending with @siemens.com
if (!emailPattern.test(emailInput.value) || !emailInput.value.endsWith("@siemens.com")) {
    alertToastMessage("Please enter your siemens email address.");
    return false;
  }
  return true;
}

// add event listener to the form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission
  if (basicValidation(nameInput, emailInput)) {

    // sending data to the server or processing it can be done here
    // For demonstration, we will just log the values to the console
    

    // If validation passes, show toast message
    toastMessage("Login successful! Welcome, " + nameInput.value + ".");
    loginForm.reset(); // reset the form
  }
});


