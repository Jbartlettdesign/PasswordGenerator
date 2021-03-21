// Assignment code here
var lengthOfCharacter;
var lowerCaseAnswere;
var upperCaseAnswere;
var numbersQuestion
var special;
var choices = 0;
var final = [];
var letLower = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
var letUpper = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"];
var specialChar = ["\u0020" , "\u0021" , "\u0022" , "\u0023" , "\u0024" , "\u0025" , "\u0026" , "\u0027" , "\u0028" , "\u0029" , "\u002A" , "\u002B" , "\u002C" , "\u002D" , "\u002E" , "\u002F" , "\u003A" , "\u003B" , "\u003C" , "\u003D" , "\u003E" , "\u003F" , "\u0040" , "\u005B" , "\u005C" , "\u005D" , "\u005E" ,  "\u005F" , "\u0060" , "\u007B" , "\u007C" , "\u007D", "\u007E"];
var letters = [];
function mixAndMatch(){
  
  for(var i = 0; i < lengthOfCharacter; i ++){
    var pickedChoice = Math.floor(Math.random()* 4);
    /*console.log(pickedChoice);*/
    /*numbers choice*/
    if (pickedChoice === 0){
      var answere = Math.floor(Math.random()* 10)
      final[i] = answere;
      
    }
  /*lower case*/
    else if(pickedChoice === 1){
      var answere = Math.floor(Math.random()* 26)
      final[i] = letLower[answere];
    }
    /*upper case*/
    else if(pickedChoice ===2){
      var answere = Math.floor(Math.random()* 26)
      final[i] = letUpper[answere];
    }
    /*special characters*/
    else if(pickedChoice ===3){
      var answere = Math.floor(Math.random()* 33)
      final[i] = specialChar[answere];
      console.log[answere];
      
  }
  else{console.log("what the fuck");}
} 
};


function generatePassword(){
window.alert("This is a password generator");
/*length of your password section*/
lengthOfCharacter = window.prompt("please your length of character from 8 to no more than 128. please answere in numeric form (1,2,3)" );
if(lengthOfCharacter < 8 || lengthOfCharacter > 128){
  alert("pick again");
}
else if(lengthOfCharacter >= 8 && lengthOfCharacter <= 128){
alert("good choice");

lowerCase();


}

};

/*window.prompt("would you like lowercase letters?");*/
function lowerCase(){
  lowerCaseAnswere = window.prompt("would you like lowercase letters? Yes or No");
  if(lowerCaseAnswere === 'Yes'){
    alert(lowerCaseAnswere);
    choices ++;
    /*console.log(choices);*/
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
  upperCaseAnswere = window.prompt("would you like lowercase letters? Yes or No");
  if(upperCaseAnswere === 'Yes'){
    alert(upperCaseAnswere);
    choices ++;
    /*console.log(choices);*/
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

};


/*window.prompt("would you like numeric letters?");*/

function NumbersGame(){
  numbersQuestion = window.prompt("would you like numeric letters? Yes or No");
  if(numbersQuestion === 'Yes'){
    alert(numbersQuestion);
    choices ++;
    /*console.log(choices);*/
    SpecialChar();
    
    
  }
  else if(numbersQuestion === 'No'){
    alert(numbersQuestion);
    SpecialChar();
  }
  
  else if(numbersQuestion === null){
  alert("That was not an acceptable answere");
  NumbersGame();
  
}
  else {
  alert("That was not an acceptable answere");
  NumbersGame();
}
return numbersQuestion;
};
/*window.prompt("would you like special characters?");*/
function SpecialChar(){
  special = window.prompt("would you like special characters? Yes or No");
  if(special === 'Yes'){
    choices ++;
    /*console.log(choices);*/
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

mixAndMatch();
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = final;

}

// Add event listener to generate button, big red generate button
generateBtn.addEventListener("click", writePassword);















/*function mixAndMatch(){
  /*console.log(lengthOfCharacter);
  console.log(lowerCaseAnswere);
  console.log(upperCaseAnswere);
  console.log(numbersQuestion);
  console.log(special);
  console.log(choices);*/

  
  /*absolute min of choice for other options*/
  /*lengthOfCharacter = lengthOfCharacter -= choices;
  /*console.log(lengthOfCharacter);*/
  /*randoLength = Math.floor((Math.random() * ((lengthOfCharacter - 1) + 1)) + 1);
  console.log(randoLength);

  
  /*part 1 numbers*/
  /*for(var i = 0; i < randoLength; i ++){
  var answere = Math.floor(Math.random()* 10)
  /*console.log(answere);*/
  /*final[i] = answere;
  
}
  lengthOfCharacter = lengthOfCharacter -= randoLength;
  console.log(final);
  /*part 2 lower letters*/
  /*for(var i = 0; i < lengthOfCharacter; i ++){
  var letter = Math.floor(Math.random()* 26);
  var pickedLetter = letLower[letter];
  letters[i] = pickedLetter;
  console.log(letter);
  /*console.log(pickedLetter);*/
  
/*}
console.log(letters);

/*part 3 upper letters*/
/*for(var i = 0; i < lengthOfCharacter; i ++){
  var letter = Math.floor(Math.random()* 26);
  var pickedLetter = letLower[letter];
  letters[i] = pickedLetter;
  console.log(letter);
  /*console.log(pickedLetter);*/
  
/*}
};*/
