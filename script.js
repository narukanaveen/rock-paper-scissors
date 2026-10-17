let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");
const resultsDiv = document.querySelector("#results");
const playerScoreEl = document.querySelector("#player-score");
const computerScoreEl = document.querySelector("#computer-score");
const resetBtn = document.querySelector("#reset-btn");

function playRound(humanChoice, computerChoice) {
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    resultsDiv.textContent = `It's a tie! Both picked ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultsDiv.textContent = `You win this round! ${capitalize(humanChoice)} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultsDiv.textContent = `Computer wins this round! ${capitalize(computerChoice)} beats ${humanChoice}.`;
  }

  playerScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;

  if (humanScore === 5) {
    resultsDiv.textContent = "🎉 Congratulations! You won the match!";
    resetBtn.style.display = "inline-block";
  } else if (computerScore === 5) {
    resultsDiv.textContent = "💀 Game Over! The computer won the match.";
    resetBtn.style.display = "inline-block";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  resultsDiv.textContent = "Choose your move to start!";
  resetBtn.style.display = "none";
});