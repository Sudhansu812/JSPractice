"use strict";

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

console.log(fruitProcessor(11, 23));

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
};

console.log(firstLastName("Sudhansu", "Maharana"));

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
  return sum / scores.length;
}

function checkWinner(dScore, kScore) {
  if (dScore > 2 * kScore) {
    return `Dolphins win with a ${dScore - kScore} point lead.`;
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

let temp = [1, 2, 3, 4, 5];
// We can store array inside another array
let arr = ["Sam", "Smith", "Solomon", temp];

console.log(temp);
console.log(arr);

// push -- adds to the end of the array
let friends = ["Sumit", "Heiiba"];
console.log(friends);
friends.push("Abhiroop");
console.log(friends);
let arrLen = friends.push("absd");
console.log(arrLen);
// push() function will return the length of the new array

// unshift -- Adds to the start of the array
friends.unshift("aisdfgb");
console.log(friends);

// pop -- removes the last element of the array
let popped = friends.pop();
console.log(friends);
console.log(popped);
// pop() function will return the element which was removed

// shift -- removes the first element of the array
let shifted = friends.shift();
console.log(friends);
console.log(shifted);
// shift() function will return the element which was removed

// indexOf -- returns the location of the element i.e. index
console.log(friends.indexOf("Sumit"));

// includes -- Returns true or false if the element exists - This uses strict equality for checking.
console.log(friends.includes("Sumit"));

if (friends.includes("Abhiroop")) {
  console.log("Kakashi");
}

/*
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
  1. Write a function 'calcTip' that takes any bill value as an input and returns
  the corresponding tip, calculated based on the rules above (you can check out
  the code from first tip calculator challenge if you need to). Use the function
  type you like the most. Test the function using a bill value of 100
  2. And now let's use arrays! So create an array 'bills' containing the test data
  below
  3. Create an array 'tips' containing the tip value for each bill, calculated from
  the function you created before
  4. Bonus: Create an array 'total' containing the total values, so the bill + tip

  Test data: 125, 555 and 44
*/

// function calcTip(billValue)
// {
//   if(billValue >= 50 && billValue <= 300)
//   {
//     return 0.15 * billValue;
//   }
//   else
//   {
//     return 0.20 * billValue;
//   }
// }

// let bills = [125, 555, 44];
// let tips = [];

// Array.from(bills).forEach((bill) => {
//   tips.push(calcTip(bill));
// })

// let totals = [];
// let i=0;

// Array.from(bills).forEach((bill) => {
//   totals.push(bill+tips[i++]);
// });

console.log(bills);
console.log(tips);
console.log(totals);

// Objects
let person = {
  firstName: "Sudhansu",
  lastName: "Maharana",
  age: 24,
  job: "Engineer",
  friends: ["Retroer", "Heiiba", "Kakashi"],
};
console.log(person);
// There are multiple ways to define objects
// The above is literal assignment, as every thing is defined inside it

// For accessing object members we have two ways,
// 1. dot notation
// 2. bracket notation
console.log(person.job);
console.log(person["firstName"]);

//let tempIn = prompt('Property Name: ');
//console.log(person[tempIn]);

// We can use the bracket notation in conditions as shown below
let tempIn = prompt("Porperty Name:");
if (person[tempIn]) {
  console.log(person[tempIn]);
} else {
  console.log("Wrong input");
}

// We can use both dot and bracket notation to add new properties
person.location = "India";
person["email"] = "sudhansu@gmail.com";
console.log(person);

// Challenge
console.log(
  `${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`
);

// Object functions
let objMeth = {
  name: "Jonas",
  hasDriverLicense: false,
  birthYear: 1999,
  // calcAge: function(birthYear) {
  //   return 2023 - birthYear;
  // }
  // calcAge: function() {
  //   return 2023 - this.birthYear;
  // }
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.name} is ${this.age} old and ${
      this.hasDriverLicense === true ? "has" : "does not have"
    } a driver's license.`;
  },
};

// console.log('Age: ' + objMeth.calcAge(1999));
// console.log('Age: ' + objMeth['calcAge'](1999));

console.log("Age: " + objMeth.calcAge());
console.log("Age: " + objMeth["calcAge"]());
console.log("Age: " + objMeth.age);

console.log(objMeth.getSummary());

/*
CODING CHALLENGE #3

Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

let mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

let john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI.toFixed(2)}) is higher than ${
      john.fullName
    }'s (${john.BMI.toFixed(2)})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.BMI.toFixed(2)}) is higher than ${
      mark.fullName
    }'s (${mark.BMI.toFixed(2)})!`
  );
}

// Iterations

for (let i = 0; i < 10; i++) {
  console.log(`Loop: ${i + 1}`);
}

let loopPerson = [
  "Sudhansu",
  "Maharana",
  24,
  "Engineer",
  ["Retroer", "Heiiba", "Kakashi"],
];

let copyPerson = [];

for (let i = 0; i < loopPerson.length; i++) {
  console.log(loopPerson[i], typeof loopPerson[i]);
  // Filling the new array with old data
  // copyPerson[i] = typeof loopPerson[i];
  copyPerson.push(typeof loopPerson[i]);
}

console.log(copyPerson);

let years = [1991, 1995, 1999, 2001, 2006];
let ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2027 - years[i]);
}

console.log(ages);

// continue and break -- These works the same as other languages
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < loopPerson.length; i++) {
  if (typeof loopPerson[i] !== "string") {
    continue;
  }
  console.log(loopPerson[i], typeof loopPerson[i]);
}

// while loop
let rep = 0;
while (rep < 10) {
  console.log("WHILE: ", rep + 1);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. 
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. 
In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.
To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
Call the function with the totals array.
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(billValue) {
  return billValue >= 50 && billValue ? 0.15 * billValue : 0.2 * billValue;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(`Average: ${calcAverage(bills).toFixed(2)}`);
