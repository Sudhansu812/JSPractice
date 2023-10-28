'use strict';

let playerE1 = document.querySelector(".player--0");
let playerE2 = document.querySelector(".player--1");

let scoreEP1 = document.getElementById("score--0");
let scoreEP2 = document.getElementById("score--1");

let currentScoreEP1 = document.getElementById("current--0");
let currentScoreEP2 = document.getElementById("current--1");

let dice = document.querySelector(".dice");

let btnNewGame = document.querySelector(".btn--new");
let btnRollDice = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

let currentScoreP1 = 0, currentScoreP2 = 0
    , totalScoreP1 = 0, totalScoreP2 = 0;

let currentActivePlayer = 0;

function init() {
    currentScoreP1 = 0;
    currentScoreP2 = 0;
    totalScoreP1 = 0;
    totalScoreP2 = 0;
    currentScoreEP1.textContent = 0;
    currentScoreEP2.textContent = 0;
    scoreEP1.textContent = 0;
    scoreEP2.textContent = 0;
    dice.src="dice_cubes.png";
    playerE1.classList.add("player--active");
    playerE2.classList.remove("player--active");
    playerE1.classList.remove("player--winner");
    playerE2.classList.remove("player--winner");
    btnRollDice.disabled = false;
    btnHold.disabled = false;
}

init();

function addScore(diceRoll) {
    if (currentActivePlayer == 0) {
        currentScoreP1 += diceRoll;
        currentScoreEP1.textContent = currentScoreP1;
    }
    else if (currentActivePlayer == 1) {
        currentScoreP2 += diceRoll;
        currentScoreEP2.textContent = currentScoreP2;
    }
}

function rollDice() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice_${diceRoll}.png`;
    console.log(diceRoll);
    if (diceRoll == 1)
    {
        switchPlayer();
    }
    else
    {
        addScore(diceRoll);
        if ((totalScoreP1+currentScoreP1) >= 100 || (totalScoreP2+currentScoreP2) >= 100)
        {
            playerWin();
        }
    }
}

function hold() {
    if (currentActivePlayer == 0)
    {
        totalScoreP1 += currentScoreP1;
        scoreEP1.textContent = totalScoreP1;
    }
    else if (currentActivePlayer == 1)
    {
        totalScoreP2 += currentScoreP2;
        scoreEP2.textContent = totalScoreP2;
    }
    switchPlayer();
}

function switchPlayer() {
    if (currentActivePlayer === 0)
    {
        currentActivePlayer = 1;
        playerE1.classList.remove("player--active");
        playerE2.classList.add("player--active");
    }
    else 
    {
        currentActivePlayer = 0;
        playerE2.classList.remove("player--active");
        playerE1.classList.add("player--active");
    }
    currentScoreP1 = 0;
    currentScoreP2 = 0;
    currentScoreEP1.textContent = 0;
    currentScoreEP2.textContent = 0;
    dice.src="dice_cubes.png";
}

function playerWin() {
    if (currentActivePlayer == 0)
    {
        totalScoreP1 += currentScoreP1;
        currentScoreEP1.textContent = 0;
        scoreEP1.textContent = "Win. (" + totalScoreP1 + ")";
        playerE1.classList.add("player--winner");
    }
    else
    {
        totalScoreP2 += currentScoreP2;
        currentScoreEP2.textContent = 0;
        scoreEP2.textContent = "Win. (" + totalScoreP2 + ")";
        playerE2.classList.add("player--winner");
    }
    btnRollDice.disabled = true;
    btnHold.disabled = true;
    dice.src="dice_cubes.png";

}

btnHold.addEventListener('click', hold);

btnRollDice.addEventListener('click', rollDice);

btnNewGame.addEventListener('click', init);