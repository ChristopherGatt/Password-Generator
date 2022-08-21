// Assignment code here

var passwordMaker = ["numbers", "upper case letters", "lower case letters", "Special characters"]

function yesOrNo() = window.prompt(
  "Should password include (passwordMaker[0])? (Y = Yes, N = No)");
  if (yesOrNo === Y) yesOrNo = true;
  else if ((yesOrNo = N)) yesOrNo = false;
  else {
    window.alert("Please enter either Y (yes) or N (no)");
    return;
  }
}

function generatePassword() {
  var passwordLengthAsk = window.prompt("What should the password length be?");

  console.log(passwordLengthAsk);

  var passwordLength = passwordLengthAsk;

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("please input a number between 8 and 128");
    return;
  }

  functio = window.prompt(
    "Should password include numbers? (Y = Yes, N = No)"

    var numbersInPasswordAsk = numbersInPassword
  );

  var numbersInPassword = yesOrNo();

  var lowerCaseInPasswordAsk = window.prompt(
    "Should password include lower case letters? (Y = Yes, N = No)"
  );

  var upperCaseInPasswordAsk = window.prompt(
    "Should password include upper case letters? (Y = Yes, N = No)"
  );

  var specialCharactersInPassword = window.prompt(
    "Should password include special characters? (Y = Yes, N = No)"
  );

  console.log(numbersInPassword);

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
