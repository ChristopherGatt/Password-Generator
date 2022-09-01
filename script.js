// Assignment code here

function randomNumber(x, y) {
  if (!y) {
    y = x;
    x = 0;
  }
  var rando = math.random();
  return Math.floor(x * (1 - rando) + rando * y);
}

function randomType(select) {
  // return select[randomNumber(0, list.length - 1)];
}

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

function generatePassword() {
  var passwordMake = [];

  var passwordLengthAsk = window.prompt("What should the password length be?");

  console.log(passwordLengthAsk);

  var passwordLength = parseInt(passwordLengthAsk);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("please input a number between 8 and 128");
    return;
  }

  var numbersInPassword = window.confirm("Should password include numbers?");

  if (numbersInPassword) {
    passwordMake.push(numbers);
  }

  console.log(passwordMake);

  var symbolsInPassword = window.confirm("Should password include symbols?");

  if (symbolsInPassword) {
    passwordMake.push(symbols);
  }

  console.log(passwordMake);

  var upperCaseAsk = window.confirm(
    "Should password include upper case letters?"
  );

  if (upperCaseAsk) {
    passwordMake.push(upperCase);
  }

  console.log(passwordMake);

  var lowerCaseAsk = window.confirm(
    "Should password include lower case letters?"
  );

  if (lowerCaseAsk) {
    passwordMake.push(lowerCase);
  }

  console.log(passwordMake);

  if (passwordMake.length === 0) {
    alert("Select at least 1 type");
    return;
  }

  console.log(passwordMake);

  var finalPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordMake.length);

    var randomIndex2 = Math.floor(
      Math.random() * passwordMake[randomIndex].length
    );

    console.log(passwordMake[randomIndex][randomIndex2]);
    finalPassword += passwordMake[randomIndex][randomIndex2];
  }
  return finalPassword;
}

//var generatePassword = "";

var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//let passwordMaker = ["numbers", "upper case letters", "lower case letters", "Special characters"]
//}

//var finalPassword =
// passwordMake[(random(0, passwordMake.length - 1), random())];

//return "generated password";

// Get references to the #generate element

//function yesOrNo() {
//  var userChoice = window.confirm("Should password include" + (passwordMaker[0]) + " ?");
//return userChoice

//console.log(yesOrNo(1));

//function yesOrNo() {
//if (yesOrNo === Y) password.push();
// else if (yesOrNo === N) yesOrNo = false;
// else {
//  window.alert("Please enter either Y (yes) or N (no)");
//  return;
// }
//}

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
