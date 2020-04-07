// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


generatePassword = function() {
  //Prompt for password length
  var length = prompt("How long do you want your password to be? Must be between 8 and 128.");
    if(length < 8 || length > 128) {
      alert("Please select a number between 8 and 128.");
      generatePassword();
    };
    
  
//Create function to generate password.
passwordChoice();
  var createdPassword = [];
  for(var i = 0; i < length; i++) {
    createdPassword[i] = userPick[Math.floor(Math.random() * userPick.length)];
    
  }
  return createdPassword.join('');
}

//Declare variables
var userPick= ""
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numeric = "1234567890"
var special ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
 

//Prompts to let user pick what to include in the password.
var passwordChoice = function() {
  var charInput = confirm("Do you want to include uppercase characters?");
  if (charInput) {
    userPick += upperCase;
  }
  var charInput = confirm("Do you want to include lowercase characters?");
  if (charInput) {
    userPick += lowerCase;
  }
  var charInput = confirm("Do you want to include numbers?");
  if (charInput) {
    userPick += numeric;
  }
  var charInput = confirm("Do you want to include special characters?")
  if (charInput) {
    userPick += special;
  }
  if (userPick === "" || userPick === null ) {
    alert("You must choose at least one character type.");
    passwordChoice();
  }
};  

