// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 // Password character options
 var lower = "abcdefghijklmnopqrstuvwxyz";
 var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var number = "1234567890";
 var symbol = "`~!@#$%^&*()-_=+[]{}\|?/.,><";
 var password = "";
 
 // Password length
 var passwordLength = prompt ("How long would you like your password to be?");
 if (passwordLength > 7 && (passwordLength < 129)) {
 } else {alert ("Please choose a password length between 8 and 128 characters");
 };
 
 // Uppder case prompt
 var passwordUpper = confirm ("Would you like upper case letters in your password?");
 if (passwordUpper) {
   computeInside(upper)
 };
 
 // Lower case prompt
 var passwordLower = confirm ("Would you like lower case letters in your password?");
 if (passwordUpper) {
   computeInside(lower)
 };
 
 // Number prompt
 var passwordNumber = confirm ("Would you like numbers in your password?");
 if (passwordNumber) {
   computeInside(number)
 };
 
 // Special character prompt
 var passwordSymbol = confirm ("Now make it super strong by adding some special characters.")
 if (passwordSymbol) {
   computeInside(symbol)
 };

for (var i = 0; i < passwordLenght; i++) { 
  password = generatePassword + lower.charAt + upper.charAt + number.charAt + symbol.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));
} 
document.getElementById("Password Generator").value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
