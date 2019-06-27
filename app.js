// Game variables
let min = 1,
    max = 10,
    winningNumber = getWinningNumber(min, max),
    guessesLeft = 5;

// UI variables
const game = document.querySelector('#game'),
    minNumber = document.querySelector('.min-number'),
    maxNumber = document.querySelector('.max-number'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNumber.textContent = min;
maxNumber.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// The guess event listener
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    console.log(guess);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, '#D8000C', '#FFBABA', '1px solid #D8000C');
    } else if (guess === winningNumber) {
        gameOver(true, 'green');
        setMessage(`${winningNumber} is correct! YOU WIN!`, 'green');
    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game over
            gameOver(true, 'red');
            setMessage(`Game over you lost! The correct number was ${winningNumber}`, 'red','none', '1px solid #D8000C');
        } else{
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left.`);
        }
    }
});

function gameOver(won, color) {
        guessInput.disabled = true;
        guessInput.style.borderColor = color;

        // Change the text  and behavior of the button on loosing.
        guessBtn.value = 'Play Again?';
        guessBtn.className += 'play-again';

}

function getWinningNumber(min, max){
    const test = Math.floor(Math.random() * (max - min + 1) + min);
    
    console.log(test);

    return test;
}
function setMessage(msg, color='black', bgcolor='none', border='none') {
    message.style.color = color;
    message.style.background = bgcolor;
    message.style.border = border;
    message.textContent = msg;
}