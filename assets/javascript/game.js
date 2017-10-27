/*
Psuedo Code:

1. generate a random letter
2. have the user pick a letter on keyboard
3. on key up action, add letter to 'yourGuesses' and
compare user guess to computer guess
4. if User Guess does not ===, Computer guess, the user will guess again.
and 1 Available guess will be removed from total, log letters that user has guessed, when user
guesses 10 times without success, add 1 to the 'Losses' counter.
5. If User guess is == to Computer Guess, add 1 to 'Wins' counter.
6. Game is reset every time a 'Win" or a 'Loss" is logged.


*/

var userWins = 0;
var userLoss = 0;
var userGuessLeft = 10;

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compGuess = letter[Math.floor(Math.random() * letter.length)];
console.log(compGuess);



// var userGuess = (userGuess).document.onkeyup();

var userGuess = prompt("pick a letter");

document.getElementById("yourGuesses").innerHTML = userGuess;
document.getElementById("losses").innerHTML = userLoss++;
document.getElementById("guessesLeft").innerHTML = userGuessLeft--;

//I need a way to store the userGuess and show it in the input box for userGuesses
//I need a 'for' loop somewhere to cycle through the guesses
$(document).ready(function () {



    document.onkeypress = function (event) {
        if (userGuess == compGuess) {
            alert("You got it!");
            userWins++;
        } else {
            userGuessLeft--;

        }
        if (userGuessLeft = 0) {
            userLoss++;
        }

        // alert("Nope, my letter was " + compGuess + " Try Again.");



        function gameReset() {
            userGuessesLeft = 10;
            userGuess;
        }



    });