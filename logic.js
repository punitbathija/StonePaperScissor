let computerScore = 0;
let playerScore = 0;

let stoneButton = document.querySelector('#stone');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissor');

let playerScoreDiv = document.querySelector('#playerScore');
let computerScoreDiv = document.querySelector('#computerScore');
let resultDiv = document.querySelector('#result');

const updateScores = (playersChoice) => {
    let result = playRound(playersChoice, getComputersChoice());

    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
    resultDiv.textContent = result;

    if (playerScore > 4 || computerScore > 4) {

        resultDiv.style.cssText = "color: whitesmoke;"
        resultDiv.style.textAlign = "center";
        resultDiv.style.fontSize = "18px";
        if (playerScore > computerScore) {
            resultDiv.textContent = "You Won!"
        }
        else if (playerScore < computerScore) {
            resultDiv.textContent = "You Lost!"
        }
        else {
            resultDiv.textContent = "It's a tie!"
        }
        endGame();
    }
}


stoneButton.addEventListener('click', () => updateScores('stone'));
paperButton.addEventListener('click', () => updateScores('paper'));
scissorsButton.addEventListener('click', () => updateScores('scissors'));


const getComputersChoice = () => {
    const choiceNumber = Math.floor(Math.random() * 3);
    switch (choiceNumber) {
        case 0: {
            return 'stone';
        }
        case 1: {
            return 'paper';
        }
        case 2: {
            return 'scissors';
        }
    }
}

/**A function to compare player and computer's choice and return results. **/
const playRound = (playersChoice, computersChoice) => {

    if (playersChoice === computersChoice) {
        return `It's a tie! ${playersChoice} vs ${computersChoice}`;
    }

    if ((computersChoice === 'stone' && playersChoice === 'paper') ||
        (computersChoice === 'paper' && playersChoice === 'scissors') ||
        (computersChoice === 'scissors' && playersChoice === 'stone')) {

        playerScore++;
        return `You won! ${playersChoice} beats ${computersChoice}`;
    }

    if ((computersChoice === 'stone' && playersChoice === 'scissors') ||
        (computersChoice === 'paper' && playersChoice === 'stone') ||
        computersChoice === 'scissors' && playersChoice === 'paper') {

        computerScore++;
        return `You lost! ${computersChoice} beats ${playersChoice}`;
    }
}


const endGame = () => {
    let playAgainButton = document.createElement('button');

    playAgainButton.setAttribute('id', 'play-again');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.style.textAlign = "center";
    playAgainButton.style.selfAlign = "center";

    stoneButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    playAgainButton.addEventListener('click', () => {
        playerScoreDiv.textContent = "";
        computerScoreDiv.textContent = "";
        resultDiv.textContent = "";

        resultDiv.style.cssText = "color: none;"
        document.querySelector('main').removeChild(playAgainButton);

        stoneButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;

        computerScore = 0;
        playerScore = 0;
    });
    document.querySelector('main').appendChild(playAgainButton);
}