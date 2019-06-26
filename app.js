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
    console.log(guessInput);
});