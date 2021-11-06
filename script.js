// Assignment code here


// Get references to the #generate element
////var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");

 // passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//When the user clicks the generate button they should be prompted to select password criteria

//User specifies length of password between 8 and 128 characters
const characterRange = document.getElementById('characterRange')
const characterNumber = document.getElementById('charachterNumber')

characterRange.addEventListener('input', syncCharacterAmount)
characterNumber.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterRange.value = value
  characterNumber.value = value
};

//User specifies character types needed (lowercase, uppercase, numeric and/or special charaters)

//Confirm user input and that at least one character type has been selected

//Generate Password

//Display Password
