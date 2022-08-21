// Assignment code here

function generatePassword() {
  var passwordLength = window.prompt("What should the password length be?");

  console.log(passwordLength);

  return "generated password";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
