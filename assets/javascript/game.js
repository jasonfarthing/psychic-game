// generate a random letter
// have the user pick a letter - on key up show result
//compare user guess to computer guess
//if not ===, user guess again
//show letters that user has guessed
//if wrong letter, subtract from available guesses
//user keeps guessing up to 10x to try to win

//add 1 to wins if user correct guess within 10 trys
//add 1 to losses if user not correct within 10 trys
// total 


var userWins = 0;
var userLoss = 0;
var userGuessLeft = 10;
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compGuess = letter[Math.floor(Math.random() * letter.length)];
console.log(compGuess);

var userGuess = prompt("pick a letter");


if (userGuess == compGuess) {
    alert("You got it!");
    (userWins++);
}
else if (userGuess !== compGuess) {
    // alert("Nope, my letter was " + compGuess + " Try Again.");
    document.getElementById("yourGuesses").innerHTML = userGuess;
    document.getElementById("losses").innerHTML = userLoss++;
    document.getElementById("guessesLeft").innerHTML = userGuessLeft--;

}



