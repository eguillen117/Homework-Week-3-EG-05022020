// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase ="abcdefghijklmnopqrstuvwxyz"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var questions = {
    {q:"How many characters would you like the password to be?", a: "tn"}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function getPassLength() {
    var userPassLength = prompt(
        "Enter your desired password length bewteen 8-20"
    )
}





// Brain storming area

//PLANNING AND MY PERSONAL NOTES

// 1. PROMPT ASK HOW MANY CHARACTERS
// 2. PROMT ASK IF THEY WANT NUMBERS
// 3. PROMPT ASK IF THEY WANT SPECIAL CHARACTERS
// 4. CREATE 4 SEPERATE FUNCTIONS. 1 WITH JUST ALPHABET, 2ND WITH ALHABET AND NUMBERS
// 3RD. ALPHABET, NUMBERS AND CHARACTERS
//5. KICK OUT WHAT IT GENERATES




// function generatePassword() {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }