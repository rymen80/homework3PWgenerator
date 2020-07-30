// start of working code
//  array variables for all the possible password values
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAplha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "/", ":", "*", "?", ".", "<", ">", "|"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// empty array to strore usr criteria choices
var criteria = [];
// grabs the generate id from the 
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  copyBtn.setAttribute("style", "background-color: green;")
  passwordText.value = password;

}
function generatePassword() {
  //ask user for input value pwLength of password
  pwLength = parseInt(prompt("How long would you like your password? Please choose betwen 8-128 "));
  // checking for valid inputs
  if (!pwLength) {
    criteria = alert("please select a valid password length");
    
  }
  else if (pwLength < 8 || pwLength > 128) {
    pwLength = parseInt(prompt("Please choose betwen 8-128"));
  }
  else {
   var numberConfirm = confirm("Would you like your password to include numbers?");
   var upperConfirm = confirm("Would you like your password to include UPPERcase varters?");
   var lowerConfirm = confirm("Would you like your password to include lowercase numbers?");
   var characterConfirm = confirm("Would you like your password to include special characters?\n for example: !,@,#,$,%,^,&,*,");
  }

  // checking for valid selctions
  if (!numberConfirm && !upperConfirm && !lowerConfirm && !characterConfirm) {
    criteria = alert("Must choose criteria!");
  }
  // checking for what values the user wants in their password
  if (numberConfirm) {
    criteria = criteria.concat(nums);
    console.log(criteria)
  }

  if (upperConfirm) {
    criteria = criteria.concat(upperAplha);
    console.log(criteria)
  }
  if (lowerConfirm) {
    criteria = criteria.concat(lowerAlpha);
    console.log(criteria)
  }
  if (characterConfirm) {
    criteria = criteria.concat(specials);
    console.log(criteria)
  }
  console.log(criteria)
  // delcare empty array password
  var password = [];

  for (var i = 0; i < pwLength; i++) {
    var selection = criteria[Math.floor(Math.random() * criteria.length)]
    password.push(selection);
  }

  // returns string of password 
  return password.join("");
  console.log(password)

}
// event listener that runs the copy password function 
copyBtn.addEventListener("click", copyPassword);
// function that copies the password to clipboard 
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("copy");
  alert("password has been copied to clipboard")
  // reloads the page after password is copied to clipboard
  location.reload();
}





