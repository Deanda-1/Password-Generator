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

function generatePassword() {
  var letters = ["abcdefghijklmnopqrstuvwxyz"];
  var numbs = ["1234567890"];
  var symbols = ["/?,.!@#$%^&*()_+"];
  var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var password = "";
  var pwLength = prompt("How long do you want your password to be? (8 to 128)");
  if (pwLength < 8) {
    alert("using a minimum length of 8");
    pwLength = 8;
  }
  if (pwLength > 128){
    alert("using the maximum length of 128");
    pwLength = 128;
  }

  var Letters = prompt("Do you want to include lower case letters? enter Y or N");
  Letters = Letters.toUpperCase();
  if (Letters != "Y" && Letters != "N") {
    alert("Sorry you did not submit a valid entry!")
  }

  var Numbers = prompt("Do you want to include numbers? enter Y or N");
  Numbers = Numbers.toUpperCase();
  if (Numbers != "Y" && Numbers != "N") {
    alert("Sorry you did not submit a valid entry!");
  }

  var Symbols = prompt("Do you want to include symbols? enter Y or N");
  Symbols = Symbols.toUpperCase();
  if (Symbols != "Y" && Symbols != "N") {
    alert("Sorry you did not submit a valid entry!");
  }

  var UpperCaseLetters = prompt("Do you want to include upper case letters? enter Y or N");
  UpperCaseLetters = UpperCaseLetters.toUpperCase();
  if (UpperCaseLetters != "Y" && UpperCaseLetters != "N") {
    alert("Sorry you did not submit a valid entry!");
  }

  var pwcriteria = ["", "", "", ""];
  pwcriteria[0] = Letters;
  pwcriteria[1] = Numbers;
  pwcriteria[2] = Symbols;
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

  if (pwcriteria[3] == "Y") {
    password = password.concat(upperCaseLetters.toString());
  }
  console.log(password); //logging the available characters selected
  var passWord = "";

  //loop to the desired length, selecting a random character
  for (var i = 0; i < pwLength; i++) {
    passWord = passWord.concat(password.charAt(Math.floor(Math.random() * password.length)));
  }
  console.log(passWord); //logging the generated password

  return (passWord);
}
