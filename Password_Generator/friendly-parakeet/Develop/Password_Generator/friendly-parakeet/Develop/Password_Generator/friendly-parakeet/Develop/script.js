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
  return select[randomNumber(0, list.length - 1)];
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

var nothing = "Invalid Password";

var passwordMake = [];

var passwordLength;

function generatePassword() {
  var passwordLengthAsk = window.prompt("What should the password length be?");

  console.log(passwordLengthAsk);

  var passwordLength = parseInt(passwordLengthAsk);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("please input a number between 8 and 128");
    return;

    for (var i = 0; i < passwordLength; i++) {
      var randomList = getRandomItem(passwordMake);
      var randomChar = getRandomItem(randomList);
      generatePassword += randomChar;
    }
  }

  var numbersInPassword = window.confirm("Should password include numbers?");

  if (numbersInPassword === true) {
    passwordMake.push(numbers);
    return;
  }

  var symbolsInPassword = window.confirm("Should password include symbols?");

  if (symbolsInPassword === true) {
    passwordMake.push(symbols);
    return;
  }

  var upperCaseAsk = window.confirm(
    "Should password include upper case letters?"
  );

  if (upperCaseAsk === true) {
    passwordMake.push(upperCase);
    return;
  }

  var lowerCaseAsk = window.confirm(
    "Should password include lower case letters?"
  );

  if (lowerCaseAsk === true) {
    passwordMake.push(lowerCase);
    return;
  }

  if (passwordMake.length === 0) {
    passwordMake.push(nothing);
  }
}

console.log(passwordMake);

var generatePassword = "";

var generateBtn = document.querySelector("#generate");

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
