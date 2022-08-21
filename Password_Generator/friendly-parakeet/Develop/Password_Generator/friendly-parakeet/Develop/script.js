// Assignment code here

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symbols = ["!", "@", "#", "$", "%", "^", "&"];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var password = [];

//let passwordMaker = ["numbers", "upper case letters", "lower case letters", "Special characters"]

//function yesOrNo() {
//  var userChoice = window.confirm("Should password include" + (passwordMaker[0]) + " ?");
//return userChoice

//console.log(yesOrNo(1));

function yesOrNo() {
  if (yesOrNo === Y) password.push();
  else if (yesOrNo === N) yesOrNo = false;
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

  var numbersInPassword = window.confirm("Should password include numbers?");

  var symbolsInPassword = window.confirm("Should password include symbols?");

  var upperCaseAsk = window.confirm(
    "Should password include upper case letters?"
  );

  var specialCharactersAsk = window.prompt(
    "Should password include special characters?"
  );
  //   var numbersInPasswordAsk = numbersInPassword
  // );

  // var numbersInPassword = yesOrNo();

  // function lowerCaseInPasswordAsk {
  // window.prompt(
  // "Should password include lower case letters? (Y = Yes, N = No)")

  // if yesOrNo() {

  //  }
  // )};
  //

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
