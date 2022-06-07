// Random choice generator for Computer.
function computerPlays() {
    var rndNum = (Math.random() * 100) / 100;
    let cpuChoice = "";

        if(rndNum < 0.34) {
            cpuChoice = "rock";
        }
        else if (rndNum <= 67) {
            cpuChoice = "paper";
        }
        else {
            cpuChoice = "scissors";
        }
        console.log("Computer chose " + cpuChoice);
        return cpuChoice;
}
// Player choice and converstion
function playerChoice() {
    let playerChoice = prompt("Rock, paper, scissors, shoot!");
    let lwrCasePlayer = playerChoice.toLowerCase();

    console.log("You chose " + lwrCasePlayer);
    return lwrCasePlayer;
}
// Game Round
function playRound (playerChoice, computerPlays) {
    if (playerChoice === computerPlays) {
        console.log("It's a draw! \n" + "You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return null;
    }
    else if (playerChoice === "paper" && computerPlays === "rock") {
        console.log("You win! \n" + "You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return true;
    }
    else if (playerChoice === "rock" && computerPlays === "scissors") {
        console.log("You win! \n" + "You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return true;
    }
    else if (playerChoice === "scissors" && computerPlays === "paper") {
        console.log("You win! \n" + "You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return true;
    }
    else if (playerChoice === "paper" && computerPlays === "scissors") {
        console.log("You lose! \n" + "You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return false;
    }
    else if (playerChoice === "rock" && computerPlays === "paper") {
        console.log("You lose! \n" + "You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return false;
    }
    else if (playerChoice === "scissors" && computerPlays === "rock") {
        console.log("You lose! \n" + "You chose " + playerChoice + " and the CPU chose " + computerPlays);
        return false;
    }
    else {
        console.log("Something went wrong...");
        return null;
    }
}
function game() {
    let playerScore = 0;
    let cpuScore = 0;

    for (let i = 0; i < 12; i++) {
        var playFive = playRound(playerChoice(),computerPlays());

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
       
}

console.log(game());