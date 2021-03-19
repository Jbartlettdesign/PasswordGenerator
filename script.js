// Assignment code here

function generatePassword(){
window.alert("This is a password generator");
/*length of your password section*/
var lengthOfCharacter = window.prompt("please your length of character from 8 to no more than 128. please answere in numeric form (1,2,3)" );
if(lengthOfCharacter < 8 || lengthOfCharacter > 128){
  alert("pick again");
}
else if(lengthOfCharacter >= 8 && lengthOfCharacter <= 128){
alert("good choice");

lowerCase();
return lengthOfCharacter;

}
};

/*window.prompt("would you like lowercase letters?");*/
function lowerCase(){
  var lowerCaseAnswere = window.prompt("would you like lowercase letters? Yes or No");
  if(lowerCaseAnswere === 'Yes'){
    alert(lowerCaseAnswere);
    UpperCase();
  }
  else if(lowerCaseAnswere === 'No'){
    alert(lowerCaseAnswere);
    UpperCase();
  }
  
  else if(lowerCaseAnswere === null){
  alert("That was not an acceptable answere");
  lowerCase();
  
}
  else {
  alert("That was not an acceptable answere");
  lowerCase();
}
};
/*window.prompt("would you like uppercase letters?");*/
function UpperCase(){
  var upperCaseAnswere = window.prompt("would you like lowercase letters? Yes or No");
  if(upperCaseAnswere === 'Yes'){
    alert(upperCaseAnswere);
    NumbersGame();
  }
  else if(upperCaseAnswere === 'No'){
    alert(upperCaseAnswere);
    NumbersGame();
  }
  
  else if(upperCaseAnswere === null){
  alert("That was not an acceptable answere");
  UpperCase();
  
}
  else {
  alert("That was not an acceptable answere");
  UpperCase();
}
}


/*window.prompt("would you like numeric letters?");*/

function NumbersGame(){
  var NumbersQuestion = window.prompt("would you like numeric letters? Yes or No");
  if(NumbersQuestion === 'Yes'){
    alert(NumbersQuestion);
    SpecialChar();
  }
  else if(NumbersQuestion === 'No'){
    alert(NumbersQuestion);
    SpecialChar();
  }
  
  else if(NumbersQuestion === null){
  alert("That was not an acceptable answere");
  NumbersGame();
  
}
  else {
  alert("That was not an acceptable answere");
  NumbersGame();
}
}
/*window.prompt("would you like special characters?");*/
function SpecialChar(){
  var special = window.prompt("would you like special characters? Yes or No");
  if(special === 'Yes'){
    alert(special);
  }
  else if(special === 'No'){
    alert(special);
  }
  
  else if(special === null){
  alert("That was not an acceptable answere");
  SpecialChar();
  
}
  else {
  alert("That was not an acceptable answere");
  SpecialChar();
}
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button, big red generate button
generateBtn.addEventListener("click", writePassword);
