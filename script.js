const maxRounds = 5;
const scoreField = document.getElementById("score");
const gameOverField = document.getElementById("gameoverfield");
const resultField = document.getElementById("result");
const Items = {
  ROCK: "Камень",
  SCISSORS: "Ножницы",
  PAPER: "Бумага",
};

let selectPlayer;
let round = 1;
let scorePlayer = 0;
let scoreComputer = 0;

function resetGame() {
  round = 1;
  scorePlayer = 0;
  scoreComputer = 0;
  scoreField.innerHTML = "Игрок 0 : 0 Компьютер";
  resultField.innerHTML = "";
  document.querySelector("#gameover").style.display = "none";
  document.querySelector("#playerbuttons").style.display = "block";
}

function gameOver() {
  if (scorePlayer == scoreComputer) gameOverField.innerHTML = "Ничья!";
  else if (scorePlayer > scoreComputer)
    gameOverField.innerHTML = "Вы выиграли эту игру!";
  else gameOverField.innerHTML = "Вы проиграли эту игру!";
  document.querySelector("#playerbuttons").style.display = "none";
  document.querySelector("#gameover").style.display = "flex";
}

function draw(result) {
  scoreField.innerHTML = `Игрок ${scorePlayer} : ${scoreComputer} Компьютер`;
  const resultElement = document.createElement("p");
  resultElement.innerHTML = `<strong>${round} раунд: </strong>` + result;
  resultField.appendChild(resultElement);
}

function playerPlay(id) {
  if (round <= maxRounds) draw(playRound(Items[id], computerPlay()));
  if (round == maxRounds) gameOver();
  round++;
}

function computerPlay() {
  selectComputer = Math.floor(Math.random() * 3) + 1;
  switch (selectComputer) {
    case 1:
      return Items.ROCK;
      break;
    case 2:
      return Items.SCISSORS;
      break;
    case 3:
      return Items.PAPER;
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return "Ничья";

  if (playerSelection == Items.ROCK && computerSelection == Items.SCISSORS) {
    scorePlayer++;
    return "Вы выиграли! Камень бьет ножницы.";
  }
  if (playerSelection == Items.SCISSORS && computerSelection == Items.PAPER) {
    scorePlayer++;
    return "Вы выиграли! Ножницы бьют бумагу.";
  }
  if (playerSelection == Items.PAPER && computerSelection == Items.ROCK) {
    scorePlayer++;
    return "Вы выиграли! Бумага бьет камень.";
  }
  if (playerSelection == Items.ROCK && computerSelection == Items.PAPER) {
    scoreComputer++;
    return "Вы проиграли! Бумага бьет камень.";
  }
  if (playerSelection == Items.SCISSORS && computerSelection == Items.ROCK) {
    scoreComputer++;
    return "Вы проиграли! Камень бьет ножницы.";
  }
  if (playerSelection == Items.PAPER && computerSelection == Items.SCISSORS) {
    scoreComputer++;
    return "Вы проиграли! Ножницы бьют бумагу.";
  }
  return "Ошибка раунда";
}
