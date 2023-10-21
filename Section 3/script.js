"use strict";
let x = 100;

console.log(x * 10);

/*
    Coding Challenge
*/

function printForecast(arr) {
	let str = "";
	for (let i = 0; i < arr.length; i++) {
		str += `... ${arr[i]}°C in 1 days `;
	}
	console.log(str);
}

let forecastedMaxTemp = [17, 21, 23];
printForecast(forecastedMaxTemp);
