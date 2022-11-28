'use strict';

// LECTURE 1 - Strict Mode

let randomCondition = true;
let randomVar = 12;

if (randomCondition) {
  randomVar === 11; // If we change the name and strict mode is on then the console will throw error
  console.log("Random shite");
}


function logger() {
  console.log("Logger invoked...");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(11,23));

// Declaration vs Expressions
function calcAge1(year) {
  return new Date().getFullYear() - year;
}

let age1 = calcAge1(1999);

let calcAge2 = function (year) {
  return new Date().getFullYear() - year;
};

let age2 = calcAge2(1998);

console.log(age1, age2);

  // In js functions can be stores as values.
  // When functions are declared normally they can be accessed before they are defined.
  // But when we declare them using expression that is storing them in a variable they can not be invoked before its declaration.
  // Mostly upto preference of the developer

// Arrow function
let calcAge3 = (birthYear) => new Date().getFullYear() - birthYear;
  // In the case of one liners the return can be ommited, if multiple lines are used then curly braces will be required and return will also have to be specified.

let age3 = calcAge3(1999);

console.log(age3);


let firstLastName = (fname, lname) => {
  return `${fname} ${lname}`;
}

console.log(firstLastName('Sudhansu', 'Maharana'));

  // Array funtion does not get "this" keyword

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
*/

// let dScore = [44, 23, 71];
// let kScore = [65, 54, 49];

let dScore = [85, 54, 41];
let kScore = [23, 34, 27];

function calcAverage(scores) {
  let sum = 0;
  Array.from(scores).forEach((score) => {
    sum += score;
  });
  return (sum / scores.length);
}

function checkWinner(dScore, kScore) {
  if(dScore > 2 * kScore) {
    return `Dolphins win with a ${dScore-kScore} point lead.`;  
  } else if (kScore > 2 * dScore) {
    return `Koalas win with a ${kScore - dScore} point lead.`;
  } else {
    return "Drow";
  }
}

let avgDolphins = calcAverage(dScore);
let avgKoalas = calcAverage(kScore);

console.log("Dolphins score ", avgDolphins);
console.log("Koalas score ", avgKoalas);

console.log(checkWinner(avgDolphins, avgKoalas));