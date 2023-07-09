function generatePassword() {
  var length = document.getElementById("password-length").value;
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  var passwordDisplay = document.getElementById("password-display");
  passwordDisplay.innerText = password;
  passwordDisplay.classList.add("highlight");
  document.getElementById("copy-button").classList.remove("hidden");
  document.getElementById("copied-notification").classList.add("hidden");
}

function copyPassword() {
  var passwordDisplay = document.getElementById("password-display");
  var range = document.createRange();
  range.selectNode(passwordDisplay);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  passwordDisplay.classList.remove("highlight");
  document.getElementById("copied-notification").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("password-length").value = 10; // Default password length
});
