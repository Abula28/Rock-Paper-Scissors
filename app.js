const buttons = {
  rock: document.querySelector(".rock"),
  paper: document.querySelector(".paper"),
  scissors: document.querySelector(".scissors"),
};

const winner = document.querySelector(".winner");

const scores = {
  pScore: document.querySelector(".pScore"),
  cScore: document.querySelector(".cScore"),
};

const choices = {
  pChoice: document.querySelector(".pChoice"),
  cChoice: document.querySelector(".cChoice"),
};

const cpuMoves = ["rock", "paper", "scissors"];

let pScoreCounter = 0;
let cScoreCounter = 0;

let pResult = "";
let cResult = "";

buttons.rock.addEventListener("click", function () {
  cResult = cpuMoves[Math.floor(Math.random() * cpuMoves.length)];
  choices.cChoice.innerHTML = cResult;
  pResult = "rock";
  choices.pChoice.innerHTML = pResult;

  if (pResult === cResult) {
    winner.innerHTML = "Draw";
  } else if (cResult == "scissors") {
    winner.innerHTML = "Player Won";
    pScoreCounter++;
    scores.pScore.innerHTML = pScoreCounter;
    scores.pScore.classList.add("addTxt");
  } else {
    winner.innerHTML = "CPU Won";
    cScoreCounter++;
    scores.cScore.innerHTML = cScoreCounter;
    scores.cScore.classList.add("addTxt");
  }

  choices.pChoice.classList.add("add");
  choices.cChoice.classList.add("add");
  // scores.pScore.classList.add('addTxt')
  // scores.cScore.classList.add('addTxt')

  setTimeout(() => {
    choices.pChoice.classList.remove("add");
    choices.cChoice.classList.remove("add");
    scores.pScore.classList.remove("addTxt");
    scores.cScore.classList.remove("addTxt");
  }, 500);
});

buttons.paper.addEventListener("click", function () {
  cResult = cpuMoves[Math.floor(Math.random() * cpuMoves.length)];
  choices.cChoice.innerHTML = cResult;
  pResult = "paper";
  choices.pChoice.innerHTML = pResult;

  if (pResult === cResult) {
    winner.innerHTML = "Draw";
  } else if (cResult == "scissors") {
    winner.innerHTML = "CPU Won";
    cScoreCounter++;
    scores.cScore.innerHTML = cScoreCounter;
    scores.pScore.classList.add("addTxt");
  } else {
    winner.innerHTML = "Player Won";
    pScoreCounter++;
    scores.pScore.innerHTML = pScoreCounter;
    scores.cScore.classList.add("addTxt");
  }

  choices.pChoice.classList.add("add");
  choices.cChoice.classList.add("add");

  setTimeout(() => {
    choices.pChoice.classList.remove("add");
    choices.cChoice.classList.remove("add");
    scores.pScore.classList.remove("addTxt");
    scores.cScore.classList.remove("addTxt");
  }, 500);
});

buttons.scissors.addEventListener("click", function () {
  cResult = cpuMoves[Math.floor(Math.random() * cpuMoves.length)];
  choices.cChoice.innerHTML = cResult;
  pResult = "scissors";
  choices.pChoice.innerHTML = pResult;

  if (pResult === cResult) {
    winner.innerHTML = "Draw";
  } else if (cResult == "rock") {
    winner.innerHTML = "Player Won";
    cScoreCounter++;
    scores.cScore.innerHTML = cScoreCounter;
    scores.pScore.classList.add("addTxt");
  } else {
    winner.innerHTML = "CPU Won";
    pScoreCounter++;
    scores.pScore.innerHTML = pScoreCounter;
    scores.cScore.classList.add("addTxt");
  }

  choices.pChoice.classList.add("add");
  choices.cChoice.classList.add("add");

  setTimeout(() => {
    choices.pChoice.classList.remove("add");
    choices.cChoice.classList.remove("add");
    scores.pScore.classList.remove("addTxt");
    scores.cScore.classList.remove("addTxt");
  }, 500);
});
