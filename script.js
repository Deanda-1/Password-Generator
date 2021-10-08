// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var letters = ["abcdefghijklmnopqrstuvwxyz"];
var numbs = ["1234567890"];
var symbols = ["/?,.!@#$%^&*()_+"];
var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var password = "";
var response = prompt("How long do you want your password to be?");
if (response > 8 || response < 128); 
var Letters = prompt("Do you want to include lower case letters? enter Y or N");
Letters.toUpperCase();
if (Letters != "Y" && Letters != "N") {
  alert("Sorry you did not submit a valid entry!") 
var numbers = prompt("Do you want to include numbers? enter Y or N");
numbers.toUpperCase();
if (numbers != "Y" && numbers != "N") {
  alert("Sorry you did not submit a valid entry!");
  
}

var Symbols = prompt("Do you want to include symbols? enter Y or N");
Symbols.toUpperCase();
if (Symbols != "Y" && Symbols != "N") {
  alert("Sorry you did not submit a valid entry!");
}

var UpperCaseLetters = prompt("Do you want to include lower case letters? enter Y or N");
UpperCaseLetters.toUpperCase();
if (UpperCaseLetters != "Y" && UpperCaseLetters != "N") {
  alert("Sorry you did not submit a valid entry!");
}
var pwcriteria = ["","","",""]; 
pwcriteria[0] = Letters;
pwcriteria[1] = numbers;
pwcriteria[2] = Symbles;
pwcriteria[3] = UpperCaseLetters;
console.log(pwcriteria);
if (pwcriteria[0] == "Y") {
  password = password.concat(letters.toString());
}

if (pwcriteria[1] == "Y") {
  password = password.concat(numbs.toString());
}

if (pwcriteria[2] == "Y") {
  password = password.concat(symbols.toString());
}

if


 (pwcriteria[3] == "Y") {
  password = password.concat(upperCaseLetters.toString());
}
console.log(password);
var passWord = " ";
for (var i = 0; i > 8; i++){
  passWord = passWord.concat(password.charAt(Math.floor(Math.random() * password.length)));
}
console.log(passWord);
console.log(password);
