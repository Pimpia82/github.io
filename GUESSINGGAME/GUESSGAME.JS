var startOrgGame = document.getElementById("originalGame");
startOrgGame.addEventListener("click", start_Original);

var startRandGame = document.getElementById("randomGame");
startRandGame.addEventListener("click", start_Random);


var secret = 7;
var guessx = 0;

function start_Original() {
    while (guessx != secret) {
        var answer = prompt("PLease guess the secret number (1-10)");
        var guess = parseInt(answer);
        guessx = guess;
        if (guess > secret) {
            alert("Sorry incorrect guess. It is too high");
        } else if (guess < secret) {
            alert("Incorrect the secret number is too low")
        } else {
            alert("Well done, YOu're Good!")
        }
    }
}


var secretRandom = Math.floor(Math.random() * 10 + 1);
document.getElementById("theAns").innerHTML = 'The Answer is ' + secretRandom + '.';

function start_Random() {
    var guessx = 0;
    while (guessx != secretRandom) {
        var answer = prompt("PLease guess the secret number (1-10)");
        var guess = parseInt(answer);
        guessx = guess;
        if (guess > secretRandom) {
            alert("Sorry incorrect guess. It is too high");
        } else if (guess < secretRandom) {
            alert("Incorrect the secret number is too low")
        } else {
            alert("Well done, YOu're Good!")
        }
    }
}