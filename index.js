let computerGuess;
let userGuesses = []

function init() {
    computerGuess = Math.floor(Math.random() * 100) + 1 ;
    document.getElementById('newGameButton').style.display = 'none';
    document.getElementById('gameArea').style.display = 'none';
    console.log(computerGuess)
}

function easy() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.querySelector('#gameArea').style.display = 'block';
}

function hard() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.querySelector('#gameArea').style.display = 'block';

}

function compareGuesses() {
    const userGuess = Number(document.querySelector('#inputBox').value);
    userGuesses.push(" " + userGuess);
    Number(document.getElementById('guesses').value) = userGuess;
    if (userGuesses < computerGuess) {
        document.getElementById('textOutput').innerText = "Your guess is too low";
        document.getElementById('inputBox').value = " ";
    }
}