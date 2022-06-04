// CPU choice for the round.
function computerplays() {
    var rndNum= (Math.random() * 100)/ 100;
    let cpuChoice ="";

    if (rndNum < 0.34) {
        cpuChoice = "Rock";
    }
    else if (rndNum <= 0.67) {
        cpuChoice = "Paper";
    }
    else {
        cpuChoice = "Scissors";
    }
    // console.log(cpuChoice);
    return cpuChoice;
}
// Player choice 
function playerChoice() {
    alert("Rock, Paper, Scissors, Shoot!");
    let playerChoice = prompt("Choice?");
    let passPlayer = playerChoice.toLocaleLowerCase();
    console.log(passPlayer);
    return passPlayer;
}