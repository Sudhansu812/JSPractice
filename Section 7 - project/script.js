"use strict";

let prizeValue = generateRandomNumber();
console.log(prizeValue);
let score = 20;
let highScore = 0;

function generateRandomNumber() {
	return Math.floor(Math.random() * 20) + 1;
}

// Clear loose ends with each check event
function clearHouse() {
	document.querySelector("#alertText").textContent = null;
	document.querySelector(".guess").value = null;

	let alertElement = document.getElementById("alertText");
	alertElement.classList.remove("warning");
	alertElement.classList.remove("wrongInput");
	alertElement.classList.remove("winnerText");

	document.querySelector(".number").textContent = "?";
}

// Restart the game without losing highscore
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

// Restart the game by resetting everything
function resetGame() {
	highScore = 0;
	document.querySelector(".highscore").textContent = null;
	refreshGame();
	document.querySelector("body").style.backgroundColor = "#222";
}

function displayAlert(displayString) {
	let alertElement = document.getElementById("alertText");
	alertElement.textContent = displayString;
}

function displayAlert(displayString, cssClass) {
	let alertElement = document.getElementById("alertText");
	alertElement.classList.add(cssClass);
	alertElement.textContent = displayString;
}

function guessNumber(guess) {
	clearHouse();
	// Empty input
	if (guess == null || guess == "") {
		displayAlert("Err.. Give me something to work with....", "warning");
	} 
	// Win
	else if (Number(guess) >= 0 && Number(guess) <= 20 && Number(guess) === prizeValue) {
		displayAlert(("Fin. Score = " + score), "winnerText");
		// Check and set highscore
		highScore = score > highScore ? score : highScore;
		score = 20;
		document.querySelector(".highscore").textContent = highScore;
		document.getElementById("checkButton").disabled = true;
		document.getElementById("guessTextBox").disabled = true;
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").textContent = "✅";
		return;
	}
	// Incorrect
	else if (Number(guess) >= 0 && Number(guess) <= 20 && Number(guess) !== prizeValue) {
		displayAlert((Number(guess) < prizeValue ? "Too low!! Try Again." : "Too high!! Try Again."), "warning");
		score--;
		document.querySelector(".number").textContent = "X";
	} 
	// Outside range
	else {
		displayAlert("Check top right...", "wrongInput");
		document.querySelector(".number").textContent = "~";
	}
	document.querySelector(".score").textContent = score;
}

// Event Listeners
document.querySelector(".check").addEventListener("click", function () {
	guessNumber(document.querySelector(".guess").value);
});

document.querySelector(".again").addEventListener("click", function () {
	refreshGame();
});

document.querySelector(".reset").addEventListener("click", function () {
	resetGame();
});
