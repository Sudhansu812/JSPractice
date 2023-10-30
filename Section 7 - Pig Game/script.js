'use strict';

let playerEP = [];
playerEP[0] = document.querySelector(".player--0");
playerEP[1] = document.querySelector(".player--1");

let scoreEP = [];
scoreEP[0] = document.getElementById("score--0");
scoreEP[1] = document.getElementById("score--1");

let currentScoreEP = [];
currentScoreEP[0] = document.getElementById("current--0");
currentScoreEP[1] = document.getElementById("current--1");

let winEP = [];
winEP[0] = document.querySelector(".win--0");
winEP[1] = document.querySelector(".win--1");

let winImgEP = [];
winImgEP[0] = document.getElementsByClassName("winimg--0");
winImgEP[1] = document.getElementsByClassName("winimg--1");

let dice = document.querySelector(".dice");
let currentDiv = document.getElementsByClassName("current");

let btnNewGame = document.querySelector(".btn--new");
let btnRollDice = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

let currentScore = [];
let totalScore = [];

let currentActivePlayer = 0;

function init() {
    currentScore[0] = 0;
    currentScore[1] = 0;
    totalScore[0] = 0;
    totalScore[1] = 0;
    currentActivePlayer = 0;
    currentScoreEP[0].textContent = 0;
    currentScoreEP[1].textContent = 0;
    scoreEP[0].textContent = 0;
    scoreEP[1].textContent = 0;
    dice.src="dice_cubes.png";
    playerEP[0].classList.add("player--active");
    playerEP[1].classList.remove("player--active");
    playerEP[0].classList.remove("player--winner");
    playerEP[1].classList.remove("player--winner");
    btnRollDice.disabled = false;
    btnHold.disabled = false;
    winEP[0].classList.add("hidden");
    winEP[1].classList.add("hidden");
    for(let i = 0; i < currentDiv.length; i++) {
        currentDiv[i].classList.remove("hidden");
    }
    for(let i = 0; i < winImgEP[0].length; i++) {
        winImgEP[0][i].classList.add("hidden");
    }
    for(let i = 0; i < winImgEP[1].length; i++) {
        winImgEP[1][i].classList.add("hidden");
    }
}

init();

function addScore(diceRoll) {
    currentScore[currentActivePlayer] += diceRoll;
    currentScoreEP[currentActivePlayer].textContent = currentScore[currentActivePlayer];
}

function rollDice() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice_${diceRoll}.png`;
    if (diceRoll == 1)
    {
        switchPlayer();
    }
    else
    {
        addScore(diceRoll);
        if ((totalScore[0]+currentScore[0]) >= 100 || (totalScore[1]+currentScore[1]) >= 100)
        {
            playerWin();
        }
    }
}

function hold() {
    totalScore[currentActivePlayer] += currentScore[currentActivePlayer];
    scoreEP[currentActivePlayer].textContent = totalScore[currentActivePlayer];
    switchPlayer();
}

function switchPlayer() {
    currentActivePlayer = currentActivePlayer === 0 ? 1 : 0;
    playerEP[0].classList.toggle("player--active");
    playerEP[1].classList.toggle("player--active");
    currentScore[0] = 0;
    currentScore[1] = 0;
    currentScoreEP[0].textContent = 0;
    currentScoreEP[1].textContent = 0;
    dice.src = "dice_cubes.png";
}

function playerWin() {
    totalScore[currentActivePlayer] += currentScore[currentActivePlayer];
    playerEP[currentActivePlayer].classList.add("player--winner");
    currentScoreEP[currentActivePlayer].textContent = 0;
    scoreEP[currentActivePlayer].textContent = totalScore[currentActivePlayer];
    winEP[currentActivePlayer].classList.remove("hidden");

    for(let i = 0; i < winImgEP[currentActivePlayer].length; i++) {
        winImgEP[currentActivePlayer][i].classList.remove("hidden");
    }

    for(let i = 0; i < currentDiv.length; i++) {
        currentDiv[i].classList.add("hidden");
    }
    btnRollDice.disabled = true;
    btnHold.disabled = true;
    dice.src="dice_cubes.png";
}

btnHold.addEventListener('click', hold);

btnRollDice.addEventListener('click', rollDice);

btnNewGame.addEventListener('click', init);