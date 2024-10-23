function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

const getChoice = document.getElementById("user");
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
function getPlayerChoice() {
    const playerChoice = getChoice.value; 
    const computerChoice = getComputerChoice(); 
    document.getElementById("cChoice").innerHTML = "AI chose " + computerChoice;

  
    if (playerChoice === computerChoice) {
        document.getElementById("result").innerHTML = "It's a tie!";
    } 
    else if (playerChoice === "rock" && computerChoice === "paper") {
        document.getElementById("result").innerHTML = "You lose! Paper covers Rock.";
        computerScore++;
    } 
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        document.getElementById("result").innerHTML = "You win! Rock crushes Scissors.";
        playerScore++;
    } 
    else if (playerChoice === "paper" && computerChoice === "rock") {
        document.getElementById("result").innerHTML = "You win! Paper covers Rock.";
        playerScore++;
    } 
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        document.getElementById("result").innerHTML = "You lose! Scissors cuts Paper.";
        computerScore++;
    } 
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        document.getElementById("result").innerHTML = "You win! Scissors cuts Paper.";
        playerScore++;
    } 
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        document.getElementById("result").innerHTML = "You lose! Rock crushes Scissors.";
        computerScore++;
    } 
    else {
        document.getElementById("result").innerHTML = "Invalid choice. Please choose Rock, Paper, or Scissors.";
    }
    roundCount++
    

if (roundCount === 5) {
if (playerScore > computerScore ){
    document.getElementById("result").innerHTML = `You win this round ${playerScore} - ${computerScore}`;
    document.getElementById("cChoice").innerHTML = '';
}
else{
    document.getElementById("result").innerHTML = `You lose this round ${playerScore} - ${computerScore}`;
    document.getElementById("cChoice").innerHTML = '';
}
playerScore = 0;
computerScore = 0;
roundCount = 0;
}
}

getChoice.addEventListener('input', getPlayerChoice);


