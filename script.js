let playerSelection = () => {
  return prompt(
    "Enter your choice \n 1. Rock \n 2. Paper \n 3. Scissor"
  ).toLowerCase();
};

let getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3) + 1;
  console.log(random);
  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const computerSelection = getComputerChoice();

let playRound = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
        return -1;
      } else if (computerSelection == "rock") {
        console.log("Play Again: Tie");
        return 0;
      } else {
        console.log("You Win! Rock beats Scissors");
        return 1;
      }

      break;

    case "paper":
      if (computerSelection == "paper") {
        console.log("Play Again: Tie");
        return 0;
      } else if (computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        return 1;
      } else {
        console.log("You Lose! Scissors beats Paper");
        return -1;
      }
      break;

    case "scissors":
      if (computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper");
        return 1;
      } else if (computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors");
        return -1;
      } else {
        console.log("Play Again: Tie");
        return 0;
      }
      break;
  }
};

// game(playerSelection, getComputerChoice());
let game = () => {
  let count = 0;
  let player = 0;
  let computer = 0;
  while (count < 5) {
    let personal = playerSelection();
    let computer = getComputerChoice();
    let roundResult = playRound(personal, computer);

    if (roundResult == -1) {
      computer++;
      count++;
    } else if (roundResult == 1) {
      player++;
      count++;
    } else {
      count--;
    }
  }

  if (player > computer) {
    console.log("Player-Wins-The-Game");
  } else {
    console.log("Computer-Wins-The-Game");
  }
};

game();
