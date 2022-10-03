// Assignment code here
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lowerLetters = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordArray = [];
var length = 8;

function writePassword() {
  prompts()
  if (prompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function generatePassword() {
  var password = "";
    for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * passwordArray.length);
        password = password + passwordArray[index];
    }
    return password;
}

function prompts() {
  passwordArray = [];
  length = parseInt(prompt("How many characters would you like your password? (Between 8-128)"));
    if (isNaN(length) || length < 8 || length > 128) {
          alert("Password must be between 8 and 128!");
      return false;
    }

    if (confirm("Add numbers?")) {
          passwordArray = passwordArray.concat(numbers);
    }

    if (confirm("Add lowercase letters?")) {
          passwordArray = passwordArray.concat(lowerLetters);
    }

    if (confirm("Add capital letters?")) {
          passwordArray = passwordArray.concat(upperLetters);
    }
    
    if (confirm("Add special characters?")) {
          passwordArray = passwordArray.concat(spCharacters);
    }
    return true;
}

generateBtn.addEventListener("click", writePassword);




// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
