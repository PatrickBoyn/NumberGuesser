// Game variables
let min = 1,
    max = 10,
    winningNumber = 2,
    guessesLeft = 3;

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

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    console.log(guess);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, '#D8000C', '#FFBABA', '1px solid #D8000C');
    }

    if (guess === winningNumber) {
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNumber} is correct! YOU WIN!`, 'green');
    } else {
        
    }
});

function setMessage(msg, color='black', bgcolor='none', border='none') {
    message.style.color = color;
    message.style.background = bgcolor;
    message.style.border = border;
    message.textContent = msg;
}