// declaring variables
var generateBtn = document.querySelector("#generate");
var characters;

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

function getPasswordChoices() {
  var passwordLength = prompt ("Generate a password between 8 and 128 characters?");
  if (passwordLength > 7 && (passwordLength < 129)) {
  } else {alert ("Please choose a password length between 8 and 128 characters");
 return; 
 }; 
  
  
  // Uppder case prompt
  var passwordUpper = confirm ("Would you like upper case letters in your password?");
 
  // Lower case prompt
  var passwordLower = confirm ("Would you like lower case letters in your password?");
 
  // Number prompt
  var passwordNumber = confirm ("Would you like numbers in your password?");
  
  // Special character prompt
  var passwordSymbol = confirm ("Now make it super strong by adding some special characters.")
 
 if(!passwordUpper && !passwordLower && !passwordNumber && !passwordSymbol){
   confirm ("please select one of the catagories");
   return;
 };
 var passwordOptions = {
   passwordLength: passwordLength,
   passwordUpper: passwordUpper,
   passwordLower: passwordLower,
   passwordNumber: passwordNumber,
   passwordSymbol: passwordSymbol
 }
 return passwordOptions;
}

 // We nned to make arrays of character options:
function generatePassword() {
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let symbol = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+']
  
var possibleCharacters = []
var result = ""

var options = getPasswordChoices()

if (options.passwordUpper){
  possibleCharacters.push(upper)
}
if(options.passwordLower){
  possibleCharacters.push(lower)
}
if(options.passwordNumber){
  possibleCharacters.push(number)
}
if(options.passwordSymbol){
  possibleCharacters.push(symbol)
}
if (!possibleCharacters){
  alert("please pick one")
  return; 
}
console.log(options.passwordLength)
var result = getRandomNumber(possibleCharacters, options.passwordLength)
appendHtml(result)
}

function getRandomNumber(arr, passwordLength) {
  var passwordResult = ""
  arr = shuffle(arr)
  console.log(arr)
  while(passwordResult.length < passwordLength) {
    for (var i = 0; i < arr.length; i++){
      var randomNumber = Math.floor(Math.random()* arr[i].length)
      var randomElement = arr[i][randomNumber]
      passwordResult = passwordResult + randomElement;
    }
  } 
  console.log(passwordResult)
  return passwordResult;
}
function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
  }
  return arr;
}
function appendHtml(password) {
  console.log(password)
  document.querySelector("#password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);