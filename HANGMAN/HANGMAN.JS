var words = ["fish", "cow", "horse", "unicorn"];
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

var answerArray = [];
for (i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
var noOfRemainingGuesses = 15;
while (remainingLetters > 0 && noOfRemainingGuesses > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));

    // Take input from the player
    var message =
        "Guess a letter, or click Cancel to stop Your have  " +
        noOfRemainingGuesses +
        " guesses left. ";
    var guess = prompt(message).toLowerCase();
    noOfRemainingGuesses--;
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update answerArray and remainingLetters for every correct guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] == "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
if (remainingLetters == 0) {
    alert("Good job! The answer was " + word);
} else {
    alert("sorry you run out of guesses. the answer was " + word);
}