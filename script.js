console.log("Type Rock, Paper, Scissor to play!" );

function getComputerChoice(){
    let randomNumber = Math.random();

    if (randomNumber < 0.33){
        return "rock";
    } else if (randomNumber < 0.66){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Type your choice: ");
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice , computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Its a TIE! You both picked " + humanChoice);
    } else if (humanChoice === "rock" && computerChoice==="scissors"){
        console.log("You WIN! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You WIN! Paper beats rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You WIN! Scissors beats Paper.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You LOST! Scissors beats Paper.");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You LOST! Paper beats Rock.");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You LOST! Rock beats Scissors.");
        computerScore++;
        }
    }   


for (let i = 0; i<5; i++){
    console.log("~~~~~ Round " + (i+1) + " ~~~~~");
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log("Current Score -> You: "+ humanScore + " | Computer Score: "+computerScore);
}

console.log("--- FINAL MATCH RESULTS ---");
    if (humanScore > computerScore) {
        console.log("Game Over! You WON the match!");
    } else if (computerScore > humanScore) {
        console.log("Game Over! The computer BEAT you!");
    } else {
        console.log("Game Over! It's a TIE!");
    }
}

playGame();