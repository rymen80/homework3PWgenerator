// start of working code

// declare variables needed for password set func
var numberConfirm;
var upperconfirm;
var lowerConfirm;
var characterConfirm;

// delcaration of arrays for all the password choices
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAplha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "/", ":", "*", "?", ".", "<", ">", "|"];
var nums = [1,2,3,4,5,6,7,8,9];

// varibale for users pw criteria choices
var usrPicks;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

