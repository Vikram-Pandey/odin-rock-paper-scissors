const buttons = document.querySelectorAll("#btns");
const result = document.querySelector("#result");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const reset = document.querySelector("#reset");

const plyr = document.querySelector("#plyr");
const comp = document.querySelector("#comp");

const container = document.querySelector(".container");
const tie = document.querySelector("#tie");

const p1 = document.querySelector("#p1");
const c1 = document.querySelector("#c1");

reset.addEventListener("click", () => {
  result.innerText = "";
  result.appendChild(p1);
  result.appendChild(c1);
  plyr.innerText = 0;
  comp.innerText = 0;
  tie.innerText = "";
  player = 0;
  computer = 0;
});

let getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let playRound = (playerSelection, computerSelection) => {
  let roundResult;
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "paper") {
        //  console.log("You Lose! Paper beats Rock");
        roundResult = -1;
      } else if (computerSelection == "rock") {
        //   console.log("Play Again: Tie");
        roundResult = 0;
      } else {
        //   console.log("You Win! Rock beats Scissors");
        roundResult = 1;
      }

      break;

    case "paper":
      if (computerSelection == "paper") {
        //   console.log("Play Again: Tie");
        roundResult = 0;
      } else if (computerSelection == "rock") {
        //   console.log("You Win! Paper beats Rock");
        roundResult = 1;
      } else {
        //   console.log("You Lose! Scissors beats Paper");
        roundResult = -1;
      }
      break;

    case "scissors":
      if (computerSelection == "paper") {
        //   console.log("You Win! Scissors beats Paper");
        roundResult = 1;
      } else if (computerSelection == "rock") {
        //   console.log("You Lose! Rock beats Scissors");
        roundResult = -1;
      } else {
        //   console.log("Play Again: Tie");
        roundResult = 0;
      }
      break;
  }
  game(roundResult, playerSelection, computerSelection);
};

// game(playerSelection, getComputerChoice());

let count = 0;
let player = 0;
let computer = 0;
// let personalChoice = playerSelection();
// let computerChoice = getComputerChoice();

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("Waiting for user");
    playRound(e.target.alt.toLowerCase(), getComputerChoice());
    console.log("User choose " + e.target.alt.toLowerCase());
  });
});

function game(roundResult, playerSelection, computerSelection) {
  if (player != 5 && computer != 5) {
    if (roundResult == -1) {
      computer++;
      tie.innerText = "";
      comp.textContent = computer;
      plyr.innerText = player;
    } else if (roundResult == 0) {
      tie.innerText = "";
      comp.textContent = computer;
      plyr.innerText = player;
      const pelementCase0 = document.createElement("p");
      pelementCase0.innerText = `Round Tie! Try Again`;
      // result.appendChild(pelementCase0);
      tie.appendChild(pelementCase0);
    } else if (roundResult == 1) {
      tie.innerText = "";
      player++;
      comp.textContent = computer;
      plyr.innerText = player;
    }
  }
  //   const helement = document.createElement("h1");
  //   helement.textContent = "Choose an option!";
  //   result.appendChild(helement);
  // } else {
  if (player == 5 || computer == 5) {
    if (player > computer) {
      result.innerHTML = "";
      // const h1element = document.createElement("h1");
      // h1element.innerText = "Result";
      // result.appendChild(h1element);
      const helement = document.createElement("h1");
      helement.textContent =
        "Player-Wins-The-Game ->" +
        "Player : " +
        player +
        " Computer : " +
        computer;
      result.appendChild(helement);
    } else {
      result.innerHTML = "";
      // const h1element = document.createElement("h1");
      // h1element.innerText = "Result";
      // result.appendChild(h1element);

      const helement = document.createElement("h1");

      helement.textContent =
        "Computer-Wins-The-Game ->" +
        "Player : " +
        player +
        " Computer : " +
        computer;

      result.appendChild(helement);
    }
  }
}
