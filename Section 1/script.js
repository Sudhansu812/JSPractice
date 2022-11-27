let js = "something";
if (js === "somethin") alert("Print true state");

console.log(45 + 20);

// LECTURE: Values and Variables
let country = "India";
let continent = "Asia";
let population = 1500000000;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(typeof null); // This is a bug in JS -- Keep note for future cases

// LECTURE: let, const and var
language = "Odia";
const PI = 3.14;
console.log(PI);

    // const is same as other lang -- constant -- ie it cannot be null when declared
    // and the value can not be changed later
    // PI = 43;
    // console.log(PI);
    // var is the Old way to declare variable -- Not to use

var job = "Programmer";
console.log(job);

// LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);

console.log("Prepend", ++population);
console.log("Postpend", population++);
console.log("Base", population);

let finlandPopulation = 6000000;

if (finlandPopulation > population) {
    console.log("Finland has more people.");
} else if (finlandPopulation < population) {
    console.log("Finland has less people.");
} else {
    console.log("They are the same.");
}

console.log(finlandPopulation > population ? "Finland" : "India");

let averagePopulation = 33000000;

if (averagePopulation > population) {
  console.log("Average is more.");
} else if (averagePopulation < population) {
  console.log("Average is less.");
} else {
  console.log("They are the same.");
}

console.log(averagePopulation > population ? "Average" : "India");

console.log("2 to the power of 3:", 2**3);
console.log("String Connatication", job+continent);

// LECTURE: Strings and Template Literals

    // Template Literals use back-ticks (``) -- not to be confused by single quotes
    // With template literals, you can use both single and double quotes inside a string.
    // Template literals allows multiline strings.
    // Template literals provide an easy way to interpolate variables and expressions into strings.
    // ex: let text = `Welcome ${firstName}, ${lastName}!`;

let portugalName = "Portugal";
let portugalContinent = "Europe";
let portugalPopulation = 11000000;
let portugalLanguage = "portuguese";
let portugalDescription = `${portugalName} is in ${portugalContinent}, and its ${portugalPopulation} people speak ${portugalLanguage}`;

console.log(portugalDescription);

// Coding Challenge 1
console.log("-- Coding Challenge 1 --");

let markMass;
let markHeight;
let johnMass;
let johnHeight;
let isMarkBmiGreater;
    // BMI = mass / height ^ 2

// Test Data 1
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

console.log(`Mark's BMI is ${markMass / markHeight ** 2}`);
console.log(`John's BMI is ${johnMass / johnHeight ** 2}`);

isMarkBmiGreater = (markMass / markHeight ** 2) > (johnMass / johnHeight ** 2);

console.log(isMarkBmiGreater);

// Test Data 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

console.log(`Mark's BMI is ${markBMI}`);
console.log(`John's BMI is ${johnBMI}`);

isMarkBmiGreater = markBMI > johnBMI;

console.log(isMarkBmiGreater);

// Coding Challenge 2

if(isMarkBmiGreater) {
  console.log(`Mark's BMI(${markBMI.toFixed(2)}) is ${(markBMI - johnBMI).toFixed(2)} higher than John's(${johnBMI.toFixed(2)}).`);
} else {
  console.log(`John's BMI(${johnBMI.toFixed(2)}) is ${(johnBMI - markBMI).toFixed(2)} higher than Mark's(${markBMI.toFixed(2)}).`);
}

// LECTURE: Type Conversion and Coercion
// Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).
/*
1. Predict the result of these 5 operations without executing them:
'9' - '5'; -- 4
'19' - '13' + '17'; -- 617
'19' - '13' + 17; -- 23
'123' < 57; -- false
5 + 6 + '4' + 9 - 4 - 2; -- 1143
2. Execute the operations to check if you were right
*/

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// LECTURE: Truthy and Falsy Values
  // In JS there are only 5 falsy values
  // 0, '', undefined, NaN, null
  // Falsy means -- Whenever converting to a boolean, the above values will turn to false.

console.log(Boolean(undefined));
console.log(Boolean('Something'));

// LECTURE: Equality Operators: == vs. ===
  // === / !== -> Strict equality - This does not do type coercion
  // == / != -> Loose equality - This one will perform type coercion
  // Better to use === as == is not reliable

let eqOperation = '18';

if (eqOperation === 18) {
  console.log("=== -> True");
} else if (eqOperation == 18) {
  console.log("== -> True");
} else {
  console.log("huh");
}

let userVal = prompt("Gimme: "); // Type will be for string type
console.log(userVal);

// Assignment

let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

// && - AND, || - OR, ! - NOT

// CODING CHALLENGE - 3

let dolphinScores = [96, 108, 89];
let koalaScores = [88, 91, 110];

let dolphinAverage = (dolphinScores[0] + dolphinScores[1] + dolphinScores[2]) / 3;
let koalaAverage = (koalaScores[0] + koalaScores[1] + koalaScores[2]) / 3;

if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
  console.log("Dolphins win");
} else if (koalaAverage > dolphinAverage && koalaAverage >= 100) {
  console.log("Koala wins");
} else if (koalaAverage === dolphinAverage && dolphinAverage > 100) {
  console.log("Draw");
} else {
  console.log("Both lose");
}

// swith-case

let sDay = "mon";

switch (sDay) {
  case "mon":
    console.log("eww");
    break;
  case "tue":
    console.log("heh");
    break;
  default:
    console.log("default");
}

// LECTURE: Statements and Expressions
  // Expressions: These are a piece of code that produces a value. Like: 3 + 4, true && false, 1245
  // Statements: It is a bigger piece of code which in on itself does not produce a value. It performs an action.


// CODING CHALLENGE 4:

let foodAmount = 40;
let foodTip = foodAmount >= 50 && foodAmount <= 300 ? foodAmount * 0.15 : foodAmount * 0.2;
let foodTotal = foodAmount + foodTip;

console.log(`The bill was ${foodAmount}, the tip was ${foodTip}, and the total value ${foodTotal}`);