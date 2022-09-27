var playerScore = 0;
document.getElementsByClassName('playerScore').innerHTML = (`Player: ${playerScore}`);
var cpuScore = 0;

var playerChoice;

document.querySelector('#rock').onclick = () => {
    playerChoice = "rock";
    gamePlay(playerChoice,computerPlays());
};
document.querySelector('#paper').onclick = () => {
    playerChoice = "paper";
    gamePlay(playerChoice,computerPlays());
};
document.querySelector('#scissors').onclick = () => {
    playerChoice = "scissors";
    gamePlay(playerChoice,computerPlays());
    ;
};
function computerPlays() {
    var rndNum = (Math.random() * 100) / 100;
    let cpuChoice = "";

        if(rndNum < 0.34) {
            cpuChoice = "rock";
        }
        else if (rndNum <= 0.67) {
            cpuChoice = "paper";
        }
        else {
            cpuChoice = "scissors";
        }
        return cpuChoice;
};
function playRound (playerChoice, computerPlays) {
    if (playerChoice === computerPlays) {
        document.getElementById('txt-prompt').innerHTML = "It's a draw!";
        document.getElementById('gameOutput').innerHTML = ("You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return null;
    }
    else if (playerChoice === "paper" && computerPlays === "rock") {
        document.getElementById('txt-prompt').innerHTML = "You win!";
        document.getElementById('gameOutput').innerHTML = ("You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return true;
    }
    else if (playerChoice === "rock" && computerPlays === "scissors") {
        document.getElementById('txt-prompt').innerHTML = "You win!";
        document.getElementById('gameOutput').innerHTML = ("You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return true;
    }
    else if (playerChoice === "scissors" && computerPlays === "paper") {
        document.getElementById('txt-prompt').innerHTML = "You win!";
        document.getElementById('gameOutput').innerHTML = ("You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return true;
    }
    else if (playerChoice === "paper" && computerPlays === "scissors") {
        document.getElementById('txt-prompt').innerHTML = "You lose!";
        document.getElementById('gameOutput').innerHTML = ("You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return false;
    }
    else if (playerChoice === "rock" && computerPlays === "paper") {
        document.getElementById('txt-prompt').innerHTML = "You lose!";
        document.getElementById('gameOutput').innerHTML = ("You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return false;
    }
    else if (playerChoice === "scissors" && computerPlays === "rock") {
        document.getElementById('txt-prompt').innerHTML = "You lose!";
        document.getElementById('gameOutput').innerHTML = ("You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return false;
    }
    else {
        document.getElementById('gameOutput').innerHTML = ("Something went wrong...");
        return null;
    }
};
function game() {
    let playerScore = 0;
    let cpuScore = 0;

    for (let i = 0; i < 12; i++) {
        var playFive = playRound(playerChoice,computerPlays());

        if (playFive === true) {
            playerScore++;
            console.log("Player:" + playerScore + "\n" + "Computer: " + cpuScore);

        }
        else if (playFive === false) {
            cpuScore++;
            console.log("Player:" + playerScore + "\n" + "Computer: " + cpuScore);
        }
        else {
            console.log("Player:" + playerScore + "\n" + "Computer: " + cpuScore);
        }
        if (playerScore === 3 && cpuScore === 3) {
    
            return "The Game is a Tie!";
        }
        else if (playerScore === 3 && cpuScore <= 2){
            return "You've won the game!";
        }
        else if (playerScore <= 2 && cpuScore === 3){
            return "The computer wins, better luck next time!";
        } 
    }
};
function gamePlay(playerChoice,computerPlays) {
    let round = playRound(playerChoice,computerPlays);
    console.log(round);
    if(round === true) {
        playerScore++;
        gameScore();
        return;
    }
    else if(round === false) {
        cpuScore++;
        gameScore();
        return;
    }
    else {
        return;
    }
};
function gameScore() {
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = cpuScore;
    if(playerScore === 5) {
        document.getElementById('txt-prompt').innerHTML = "You've Won!";
        return;
    }
    else if(cpuScore === 5) {
        document.getElementById('txt-prompt').innerHTML = "You've Lost";
        return;
    }
    else {
        return;
    }
};