let computerScore 	= 0;
let humanScore 		= 0;
let result;

function getComputerChoice()
{
	return Math.random() < 0.33 ? "rock" : 
			Math.random() < 0.66 ? "paper" : "scissors";
}

function getHumanChoice()
{
	return (prompt("Rock, Paper, or Scissors?").toLowerCase());
}

function playRound(computerChoice, humanChoice)
{
	computerSelection.textContent = "The computer has chosen: " + computerChoice;
	playerSelection.textContent = "You have chosen: " + humanChoice;
	if (computerChoice == "rock")
	{
		switch (humanChoice)
		{
			case "rock":
				return "It's a tie!";
			case "paper":
				humanScore++;
				return "You win! Paper beats rock.";
			case "scissors":
				computerScore++;
				return "You lose! Rock beats scissors.";
		}
	} else if (computerChoice == "paper")
	{
		switch (humanChoice)
		{
			case "rock":
				computerScore++;
				return "You lose! Paper beats rock";
			case "paper":
				return "It's a tie!";
			case "scissors":
				humanScore++;
				return "You win! Scissors beats paper.";
		}
	} else if (computerChoice == "scissors")
	{
		switch (humanChoice)
		{
			case "rock":
				humanScore++;
				return "You win! Rock beats scissors";
			case "paper":
				computerScore++;
				return "You lose! Scissors beats paper.";
			case "scissors":
				return "It's a tie!";
		}
	}
}

let gameplay = document.getElementById("gameplay-buttons");
let btn_rock 		= document.getElementById("btn-rock");
let btn_paper	 	= document.getElementById("btn-paper");
let btn_scissors 	= document.getElementById("btn-scissors");

let printResult = document.getElementById("results");
let computerSelection = document.createElement("p");
printResult.appendChild(computerSelection);
let playerSelection = document.createElement("p");
printResult.appendChild(playerSelection);
let gameResult = document.createElement("p");
printResult.appendChild(gameResult);
let printComputerScore = document.createElement("p");
printComputerScore.textContent = "Computer Score: " + computerScore;
printResult.appendChild(printComputerScore);
let printPlayerScore = document.createElement("p");
printPlayerScore.textContent = "Player Score: " + humanScore;
printResult.appendChild(printPlayerScore);

gameplay.addEventListener("click", (event) => {
	let target = event.target;

	switch(target.id) {
		case "btn-rock":
			result = playRound(getComputerChoice(), "rock");
			break;
		case "btn-paper":
			result = playRound(getComputerChoice(), "paper");
			break;
		case "btn-scissors":
			result = playRound(getComputerChoice(), "scissors");
			break;
	}
	printComputerScore.textContent = "Computer Score: " + computerScore;
	printPlayerScore.textContent = "Player Score: " + humanScore;
	gameResult.textContent = result;
})

let reset = document.getElementById("reset");

reset.addEventListener("click", (event) => {
	computerScore = 0;
	humanScore = 0;
	printComputerScore.textContent = "Computer Score: " + computerScore;
	printPlayerScore.textContent = "Player Score: " + humanScore;
})
