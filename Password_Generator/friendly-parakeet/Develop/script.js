// Assignment code here

function generatePassword() {
  var passwordLengthAsk = window.prompt("What should the password length be?");

  console.log(passwordLengthAsk);

  var passwordLength = passwordLengthAsk;

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("please input a number between 8 and 128");
    return;
  }

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
