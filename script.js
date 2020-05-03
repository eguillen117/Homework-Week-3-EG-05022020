// Here I List out the Possible individual Variables and I assigned them to tag respectively=======

var alphaNumArray = [];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];


// Function to generate password ================= This Button is linked to the button on HTML which will intiate the function
function generatePassword() {
    var passwordString = "";
    //Confirm or cancel to get criteria ===========================
    var useLowerCase = confirm("Would you like to include lowercase characters?");
    var useUpperCase = confirm("Would you like to include uppercase characters?");
    var useNumeric = confirm("Would you like to numeric characters?");
    var useSpecial = confirm("Would you like to include special characters?");

    // Loop for confirming criteia. If the user hits cancel on all of them this will kick out again============================
    while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
        alert("Uh oh! Please select at least one of the options!");
        useLowerCase = confirm("Would you like to include lowercase characters?");
        useUpperCase = confirm("Would you like to include uppercase characters?");
        useNumeric = confirm("Would you like to include numeric characters?");
        useSpecial = confirm("Would you like to include special characters?");

    }
    // Password Length verfication ===============================
    var passwordLength = parseInt(prompt("Please select the total number of characters you would like the password to be. Type in a number bewteen 8 and 128"));
    while (passwordLength < 8 || passwordLength > 128 || typeof (passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
        alert("Whoops! Please choose a number between 8 and 128");
        passwordLength = parseInt(prompt("Please select the total number of characters you would like the password to be. Type in a number bewteen 8 and 128"));
    }
    // Criteria for the password. If statement equals true than it will include the variables in the math.random.
    // depending on what the user individually selects the if statements below will proceed to the next phase if they are true.
    if (useLowerCase == true) {
        alphaNumArray.push(lowerCaseChar);
    }
    if (useUpperCase == true) {
        alphaNumArray.push(upperCaseChar)
    }
    if (useNumeric == true) {
        alphaNumArray.push(numericChar)
    }
    if (useSpecial == true) {
        alphaNumArray.push(specialChar)
    }

    // Loop for the password length and variables ========================
    for (var i = 0; i < passwordLength; i++) {
        var randomCharArrayNum;
        var selectedCharArray;
        var randomCharNum;
        var randomChar;
        // a random number is generated for the alphanumeric array (length of alphanumeric array)
        randomCharArrayNum = parseInt(Math.floor(Math.random() * alphaNumArray.length)); //random number based on length of case array
        // Random Number ======================
  
        selectedCharArray = alphaNumArray[randomCharArrayNum];
        // VAR Random number and Length
        randomCharNum = Math.floor(Math.random() * selectedCharArray.length);
        randomChar = selectedCharArray[randomCharNum];
        
        passwordString += randomChar;
    } //Kicks out the text to the Div Class Body in HTML. 
    alert("Here is your new password! :)")
    passwordEntry.textContent = passwordString;

}
