"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct!!!";

document.querySelector(".score").textContent = 13;
document.querySelector(".highscore").textContent = 14;

console.log(document.querySelector(".guess").value);

*/

let prizeValue = generateRandomNumber();
let score = 20;
let highScore = 0;
console.log(prizeValue);

function generateRandomNumber() {
	return Math.floor(Math.random() * 20) + 1;
}

function clearHouse() {
	document.querySelector("#alertText").textContent = "";
	document.querySelector(".guess").value = "";
	let alertElement = document.getElementById("alertText");
	alertElement.classList.remove("warning");
	alertElement.classList.remove("wrongInput");
	alertElement.classList.remove("winnerText");
}

function refreshGame() {
	clearHouse();
	prizeValue = generateRandomNumber();
	score = 20;
	document.querySelector(".score").textContent = score;
	document.getElementById("checkButton").disabled = false;
	document.getElementById("guessTextBox").disabled = false;
}

function guessNumber(guess) {
	clearHouse();
	let alertElement = document.getElementById("alertText");
	if (guess == null || guess == "") {
		alertElement.classList.add("warning");
		alertElement.textContent = "Err.. Give me something to work with....";
	} else if (
		Number(guess) >= 0 &&
		Number(guess) <= 20 &&
		Number(guess) === prizeValue
	) {
		alertElement.classList.add("winnerText");
		alertElement.textContent = "Fin. Score = " + score;
		highScore = score > highScore ? score : highScore;
		score = 20;
		document.querySelector(".highscore").textContent = highScore;
		document.querySelector(".score").textContent = highScore;
		document.getElementById("checkButton").disabled = true;
		document.getElementById("guessTextBox").disabled = true;
	} else if (
		Number(guess) >= 0 &&
		Number(guess) <= 20 &&
		Number(guess) !== prizeValue
	) {
		alertElement.classList.add("warning");
		alertElement.textContent = "Wrong!! Try Again.";
		score--;
	} else {
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
