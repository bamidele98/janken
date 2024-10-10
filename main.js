function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}


const computerChoice = getComputerChoice();
console.log("Computer chose:", computerChoice);

const getChoice = document.getElementById("user");

function getPlayerChoice() {
    const playerChoice = getChoice.value; 
    console.log("You picked:", playerChoice);

    
    if (playerChoice === computerChoice) {
        document.getElementById("result").innerHTML = "It's a tie!";
        document.getElementById("cChoice").innerHTML = "AI chose " + computerChoice;
    } 
    else if (playerChoice === "rock" && computerChoice === "paper") {
        document.getElementById("result").innerHTML = "You lose! Paper covers Rock.";
    } 
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        document.getElementById("result").innerHTML = "You win! Rock crushes Scissors.";
    } 
    else if (playerChoice === "paper" && computerChoice === "rock") {
        document.getElementById("result").innerHTML = "You win! Paper covers Rock.";
    } 
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        document.getElementById("result").innerHTML = "You lose! Scissors cuts Paper.";
    } 
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        document.getElementById("result").innerHTML = "You win! Scissors cuts Paper.";
    } 
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        document.getElementById("result").innerHTML = "You lose! Rock crushes Scissors.";
    } 
    else {
        document.getElementById("result").innerHTML = "Invalid choice. Please choose Rock, Paper, or Scissors.";
    }
}

getChoice.addEventListener('change', getPlayerChoice);
