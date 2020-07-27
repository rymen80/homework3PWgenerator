// start of working code

// declare variables needed for passwordGenrate function
var numberConfirm;
var upperConfirm;
var lowerConfirm;
var characterConfirm;
var length;

//  array variables for all the password choices
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAplha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "/", ":", "*", "?", ".", "<", ">", "|"];
var nums = [1,2,3,4,5,6,7,8,9];
// empty array to strore usr criteria choices 
var criteria = [];

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
function generatePassword() {
  //ask user for input value length of password
  length = parseInt(prompt( "How long would you like your password? Please choose betwen 8-128 "));
  // checking for valid inputs
  if(!length)   {
    criteria = alert("please select a valid length");
  } 
  else if(length < 8 || length > 128) {
     length = parseInt(prompt("Please choose betwen 8-128"));
  } 
  else {
     numberConfirm = confirm("Would you like your password to include numbers?");
     upperConfirm = confirm("Would you like your password to include UPPERcase letters?");
     lowerConfirm = confirm("Would you like your password to include lowercase numbers?");
     characterConfirm = confirm("Would you like your password to include special characters?\n for example: !,@,#,$,%,^,&,*,");
    }

    // checking for valid selctions
    if (!numberConfirm && !upperConfirm && !lowerConfirm && !characterConfirm) {
      criteria = alert("Must choose criteria!");
    }
    // store 4/4 choices 
    else if (numberConfirm && upperConfirm && lowerConfirm && characterConfirm) {
      criteria = nums.concat(upperAplha, lowerAlpha, specials);
      console.log(criteria)
    }
    // 3/4 criteria choices made 
    else if (numberConfirm && upperConfirm && lowerConfirm) {
      criteria = nums.concat(upperAplha,lowerAlpha);
      console.log(criteria)
    }
    else if (numberConfirm && lowerConfirm && characterConfirm) {
      criteria = nums.concat(lowerAlpha,specials);
      console.log(criteria)
    }
    else if (numberConfirm && upperConfirm && characterConfirm) {
      criteria = nums.concat(upperAplha, specials);
      console.log(criteria)
    }
    else if (upperConfirm && lowerConfirm && characterConfirm) {
      criteria = upperAplha.concat(lowerAlpha, specials);
      console.log(criteria)
    }
    // 2/4 criteria choices made 
    else if (numberConfirm && upperConfirm) {
      criteria = nums.concat(upperAplha);
      console.log(criteria)
    }
    else if (numberConfirm && lowerConfirm) {
      criteria = nums.concat(lowerAlpha);
      console.log(criteria)
    }
    else if (numberConfirm && characterConfirm) {
      criteria = nums.concat(specials);
      console.log(criteria)
    }
    else if (upperConfirm && lowerConfirm) {
      criteria = upperAplha.concat(lowerAlpha);
      console.log(criteria)
    }
    else if (upperConfirm && characterConfirm) {
      criteria = upperAplha.concat(specials);
      console.log(criteria)
    }
    else if (lowerConfirm && characterConfirm) {
      criteria = lowerAlpha.concat(specials);
      console.log(criteria)
    } 
    // 1/4 criteria choices made 
    else if (numberConfirm) {
      criteria = nums;
      console.log(criteria)
    }
    else if (upperConfirm) {
      criteria = upperAplha;
      console.log(criteria)
    }
    else if (lowerConfirm) {
    criteria = lowerAlpha;
    console.log(criteria)
    // last and only possible choice left 
  } else {
    criteria = specials;
    console.log(criteria)
  }


  

}

generateBtn.addEventListener("click", writePassword);

