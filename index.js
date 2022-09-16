let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuess;
let low = 1;
let high = 100;

function updateGuess() {
    const lowValue =document.getElementById('low');
    lowValue.style.flex = low + '%';
    lowValue.style.background = '#ef7b54';
    console.log('low' + low);

    const space =document.getElementById('space');
    space.style.flex = high - low + '%';
    space.style.background = '#83e1d0';
    console.log('high' + high);

    const highValue =document.getElementById('high');
    highValue.style.flex = 100 - high + '%';
    highValue.style.background = '#ef7b54';

    rangeOutput()

}

function rangeOutput() {
    const range = document.getElementById('rangeOutput');
    range.innerText = `${low} - ${high}`;
    range.style.marginLeft = low + '%';
    range.style.marginRight = 100 - high + '%';
    range.classList.add("flash");
}

function init() {
    computerGuess = Math.floor(Math.random() * 100) + 1 ;
    document.getElementById('newGameButton').style.display = 'none';
    document.getElementById('gameArea').style.display = 'none';
    console.log(computerGuess)
}

function easy() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.querySelector('#gameArea').style.display = 'block';
    maxGuess = 10;
}

function hard() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.querySelector('#gameArea').style.display = 'block';
    maxGuess = 5;

}

function gameEnded() {
    document.getElementById('newGameButton').style.display = 'inline';
    document.getElementById('inputBox').setAttribute("readonly", "readonly");
    gameEnded()
}
function newGame() {
    window.location.reload();
}

function compareGuess() {
    const userGuess = Number(document.querySelector('#inputBox').value);
    userGuesses.push(" " + userGuess);
    document.getElementById('guesses').innerHTML = userGuesses;
    attempts ++;
    document.getElementById('attempts').innerHTML = attempts;
    console.log(maxGuess);
    if (attempts < maxGuess) {
        if (computerGuess > userGuess) {
            if (userGuess > low) low = userGuess;
            document.getElementById('textOutput').innerHTML = "Your Guess IS Too Low";
            document.getElementById('inputBox').value = "";
        } else if ( computerGuess < userGuess) {
            if (userGuess < high) high = userGuess;
            document.getElementById('textOutput').innerHTML = "Your Guess IS Too High";
            document.getElementById('inputBox').value = "";
        } else { document.getElementById('textOutput').innerHTML = "Correct you got it in " + attempts + ' attempts';
             document.getElementById('inputBox').value = "";
             gameEnded()
        }
        

    } else {
        if (computerGuess > userGuess) {
            if (userGuess > low) low = userGuess;
            document.getElementById('textOutput').innerHTML = "You loss the correct number is " + computerGuess;
        } else if ( computerGuess < userGuess) {
            if (userGuess < high) high = userGuess;
            document.getElementById('textOutput').innerHTML = "You loss the correct number is " + computerGuess;
        } else { document.getElementById('textOutput').innerHTML = "Correct you got it in " + attempts + ' attempts';
             gameEnded()
        }
        gameEnded()
    }

    updateGuess();
}
