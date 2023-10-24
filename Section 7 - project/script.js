"use strict";

let prizeValue = generateRandomNumber();
console.log(prizeValue);
let score = 20;
let highScore = 0;

function generateRandomNumber() {
	return Math.floor(Math.random() * 20) + 1;
}

function clearHouse() {
	document.querySelector("#alertText").textContent = null;
	document.querySelector(".guess").value = null;
	let alertElement = document.getElementById("alertText");
	alertElement.classList.remove("warning");
	alertElement.classList.remove("wrongInput");
	alertElement.classList.remove("winnerText");
}

function refreshGame() {
	clearHouse();
	prizeValue = generateRandomNumber();
	console.log(prizeValue);
	score = 20;
	document.querySelector(".score").textContent = score;
	document.getElementById("checkButton").disabled = false;
	document.getElementById("guessTextBox").disabled = false;
	document.querySelector("body").style.backgroundColor = "#222";
}

function resetGame() {
	highScore = 0;
	document.querySelector(".highscore").textContent = null;
	refreshGame();
	document.querySelector("body").style.backgroundColor = "#222";
}

function guessNumber(guess) {
	clearHouse();
	let alertElement = document.getElementById("alertText");
	if (guess == null || guess == "") {
		alertElement.classList.add("warning");
		alertElement.textContent = "Err.. Give me something to work with....";
	} 
	else if (Number(guess) >= 0 && Number(guess) <= 20 && Number(guess) === prizeValue) {
		alertElement.classList.add("winnerText");
		alertElement.textContent = "Fin. Score = " + score;
		highScore = score > highScore ? score : highScore;
		score = 20;
		document.querySelector(".highscore").textContent = highScore;
		// document.querySelector(".score").textContent = highScore;
		document.getElementById("checkButton").disabled = true;
		document.getElementById("guessTextBox").disabled = true;
		document.querySelector("body").style.backgroundColor = "#60b347";
		return;
	} 
	else if (Number(guess) >= 0 && Number(guess) <= 20 && Number(guess) !== prizeValue) {
		alertElement.classList.add("warning");
		alertElement.textContent = Number(guess) < prizeValue ? "Too low!! Try Again." : "Too high!! Try Again.";
		score--;
	} 
	else {
		alertElement.classList.add("wrongInput");
		alertElement.textContent = "Check top right...";
	}
	document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", function () {
	guessNumber(document.querySelector(".guess").value);
});

document.querySelector(".again").addEventListener("click", function () {
	refreshGame();
});

document.querySelector(".reset").addEventListener("click", function () {
	resetGame();
});
