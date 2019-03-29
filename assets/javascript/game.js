// VARIABLES

var words = ["mercury", "venus", "mars","earth", "jupiter", "saturn", "uranus"]

var wins = 0;
var guessesLeft = 12;
var userGuess = [];

var randomWord = "";
var blankLetters = 0;
var correctLetter = [];
var wrongLetter = [];
var allLetters = [];

var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("currentWord-text");
var guessesLeft = document.getElementById("guessesLeft");
var userGuessText = document.getElementById("userGuess-text");

fuction game (); {
    randomWord = words[Math.floor(Math.random() * words.length)];
    blanks=lettersOfWord.lenght;
    
    for (var = i; i < blankLetters; i++) {
        allLetters.push("_");
    }
}

    if (correctLetter) {
        for (var = i; i < blankLetters; i++) {
            if (randomWord[i] == correctLetter) {
                allLetters[i] = correctLetter;
            }
        }
    }
    else {
        wrongLetter.push(allLetters);
        guessesLeft--;
    }



document.onkeyup = function(event) {
var userGuess = event.key;

// GAME START
if (userGuess === "s") {

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    winsText.textContent = "Wins: " + wins;
    guessesLeft.textContent = "Guesses Remaining: " + guessesLeft;
    userGuess.textContent = "Letters Guessed Already: " + userGuess;

    if (options.indexOf(userChoice) > -1) {

        if (userChoice === computerGuess) {
            wins++;
            guessLeft = 8;
            guessChoice = [];
        }

}
}}
