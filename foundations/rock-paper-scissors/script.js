function getComputerChoice()
{
	return Math.random() < 0.33 ? "rock" : 
			Math.random() < 0.66 ? "paper" : "scissors";
}

function getHumanChoice()
{
	return (prompt("Rock, Paper, or Scissors?").toLowerCase());
}

function playGame()
{
	function playRound(computerChoice, humanChoice)
	{
		console.log("The computer has chosen: " + computerChoice);
		console.log("You have chosen: " + humanChoice);
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
	
	let computerScore = 0;
	let humanScore = 0;

	for (let i = 1; i <= 5; i++)
	{
		console.log("Round " + i + " of 5.");
		let computerChoice = getComputerChoice();
		let humanChoice = getHumanChoice();
		while (!(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors"))
		{
			console.log("Invalid input. Only case-insensitive \"Rock\", \"Paper\", or \"Scissors\" is allowed.");
			humanChoice = getHumanChoice();
		}
		console.log(playRound(computerChoice, humanChoice));
	}

	console.log("Computer Score: " + computerScore + "\nPlayer Score: " + humanScore);
	console.log(computerScore == humanScore ? "It's a tie!" :
			computerScore < humanScore ? "You win!" : "Computer win!");
}

playGame();
