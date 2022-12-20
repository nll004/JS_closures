
function guessingGame() {
    const randNum = Math.floor(Math.random() * 101);
    let guessCount = 0;
    let gameFinished = false;

    return function checkGuess(guess){
        if(gameFinished) return "The game is over, you already won!"
        else guessCount += 1;

        if (guess > randNum) return `${guess} is too high!`;
        else if (guess < randNum) return `${guess} is too low!`;
        else {
            gameFinished = true;
            return `You win! You found ${guess} in ${guessCount} guesses.`;
        }
    }
}


module.exports = { guessingGame };
