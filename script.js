// Assignment Code - Variables =======
var alphaNumArray =[];
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special characters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";



// Write Functions =================
function generatePassword(){
    var passwordString="";
  
}


function getPassLength() {
    var userPassLength = prompt(
        "Enter your desired password length bewteen 8-20";
    )
}


// Questions ======================
useLowerCase=confirm("Do you want to include lowercase characters?");
        useUpperCase=confirm("Do you want to include uppercase characters?");
        useNumeric=confirm("Do you want to include numeric characters?");
        useSpecial=confirm("Do you want to include special characters?");


        
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// populates the overall alphanumeric array that will add each selected PW criteria to array that will be the new pw
if (useLowerCase==true){
    alphaNumArray.push(lowerCaseChar);
}
if (useUpperCase==true){
    alphaNumArray.push(upperCaseChar)
}
if (useNumeric==true){
    alphaNumArray.push(numericChar)
}
if (useSpecial==true){
    alphaNumArray.push(specialChar)


    //LOOPS =============
    for(var i=0;i<passwordLength;i++){
        var randomCharArrayNum;
        var selectedCharArray;
        var randomCharNum;
        var randomChar;



    
PasswordEntry.documentWrite = passwordString;


// Brain storming area ====================================

//PLANNING AND MY PERSONAL NOTES

// Welcome Alert

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