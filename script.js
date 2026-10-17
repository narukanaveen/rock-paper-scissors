console.log("Type Rock, Paper, Scissor to play!" );

let humanScore = 0;
let computerScore = 0;

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
const resultsDiv = document.querySelector("#results");


    function playRound(humanChoice , computerChoice){
    if (humanScore >= 5 || computerScore >= 5) {
    return; // Stops any further rounds from running
}
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `Its a TIE! You both picked ${humanChoice}. Score: You ${humanScore} - ${computerScore}`;
    } else if (humanChoice === "rock" && computerChoice==="scissors"){
        humanScore++;
        resultsDiv.textContent = `You WIN! Rock beats Scissors. Score: You ${humanScore} - ${computerScore} Computer`;        
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        resultsDiv.textContent = `You WIN! Paper beats rock. Score: You ${humanScore} - ${computerScore}`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultsDiv.textContent = `You WIN! Scissors beats Paper. Score: You ${humanScore} - ${computerScore}`;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        resultsDiv.textContent = `You LOST! Scissors beats Paper. Score: You ${humanScore} - ${computerScore}`;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        resultsDiv.textContent = `You LOST! Paper beats Rock. Score: You ${humanScore} - ${computerScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        resultsDiv.textContent = `You LOST! Rock beats Scissors. Score: You ${humanScore} - ${computerScore}`;
        }
    if (humanScore === 5) {
    resultsDiv.textContent += " 🎉 Game Over! You won the match!";
} else if (computerScore === 5) {
    resultsDiv.textContent += " 💀 Game Over! The computer won the match!";
}
    }   

const rockBtn = document.querySelector("#Rock");

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector("#Paper");

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector("#Scissors");

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
