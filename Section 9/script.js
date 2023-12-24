'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22
    },
    [weekdays[4]]: {
        open: 11,
        close: 23
    },
    [weekdays[5]]: {
        open: 0,
        close: 24
    },
    [`hiho${1-3+45}`]: {
        open: 0,
        close: 24
    }
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'ABC NY SA123',
    categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({starterIndex, mainIndex, time, address}) {
        console.log(`Order Received. ${this.starterMenu[starterIndex]} \
and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}.`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Pasta: ${ing1}, ${ing2}, ${ing3}`);
    },
    orderPizza(mainIng, ...optIng) {
        console.log(mainIng);
        console.log(optIng);
    }
}

restaurant.orderDelivery({
    time: '22:30',
    address: 'Ams 122 TK1 Strt',
    mainIndex: 2,
    starterIndex: 2
});

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// It is not dependent on the number of elements, it will be based on the  sequence.

let [first, , second] = restaurant.categories;
console.log(first, second);

// Switching variables
[first, second] = [second, first];
console.log(first, second);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, ,[j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = -1, q = -1, r = -1] = [8, 9];
console.log(p, q, r);

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// Default values + custom name
const {name: restaurantName, openingHours: hours
    , categories: tags
    , ratings: userReviews = {rating: "NA"}} = restaurant;

console.log(restaurantName, hours, tags, userReviews);

// Unlike array destructuring, we cannot directly destructure already existing variables
// We must use paranthesis, like shown below
let temp_a = 32;
let temp_b = 63;
const obj = { a: 12, b: 4234, c: 23532};
({ temp_a, temp_b } = obj);

// Nested objects
const { sat: s, sat: {open: o, close: g} } = openingHours;
console.log(s, o, g);

const spread_source_arr = [7, 8, 9];
const spread_dest_arr = [1, 2, ...spread_source_arr];
console.log(spread_dest_arr);
console.log(...spread_dest_arr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
mainMenuCopy[1] = 'Alfredo';
console.log(mainMenuCopy);
console.log(restaurant.mainMenu);

// The below code will create reference, but if we want a copy, 
// above is the way to go
// const mainMenuCarbonCopy = restaurant.mainMenu;
// mainMenuCarbonCopy[1] = 'Alfredo';
// console.log(mainMenuCarbonCopy);
// console.log(restaurant.mainMenu);

// Iterables
const str = 'Sudhansu';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// const ingredients = [prompt('ing 1: '), prompt('ing 2: '), prompt('ing 3: ')];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

const newRestaurant = {
    founder: 'John Smith',
    foundedIn: 1998,
    ...restaurant
}

console.log(newRestaurant);

// Spread - Unpack, right side of the assignment
// Rest - Pack, left side of the assignment - This must be the last element

const [rest_a, rest_b, ...rest_arr] = [1, 2, 3, 4 , 5, 6];
console.log(rest_a, rest_b, rest_arr);

const add = function(...nums) {
    let sum = 0;
    for(let i=0; i< nums.length; i++) {
        sum += nums[i];
    }
    console.log(nums);
    console.log(sum);
}

add(2,3);
add(2,3,4,5);
add(...arr);

restaurant.orderPizza('Chicken','sjnfgo','afuafu');

// && || - Short Circuiting
// || - If the first value is truthy value, js will return this and not evaluate further
console.log(3 || 'Sudhansu');
console.log('' || 'Sudhansu');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 0 is not truthy

const guests_wo_sc = restaurant.numGuests ? restaurant.numGuests: 10;
console.log(guests_wo_sc);
console.log(restaurant);

const guests = restaurant.numGuests || 10;
console.log(guests);
// Issue here if the numGuests is 0 the default ie 10 will be taken

// AND && - It will be kinda opposite of OR in the sense, if the 
// value is true it will continue
// So it will either return the first non truthy value or return the last element if 
// no non-truthy values were found
console.log('Sudhansu' && null && 234);
console.log('Sudhansu' && 'Kumar' && 'Maharana');

if (restaurant.orderPizza) {
    restaurant.orderPizza('aisdiausdf');
}

restaurant.orderPizza && restaurant.orderPizza('aiufiuefwieu');

// Nullish Coalescing - Non nullish value will be returned
restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

const rest1 = {
    name: 'Corp1',
    numGuests: 0
};

const rest2 = {
    owner: 'John Smith',
    name: 'La Pina'
};

rest2.numGuests = rest2.numGuests || 10;
console.log(rest2);

// rest1.numGuests ||= 10;
// console.log(rest1);

rest1.numGuests ??= 10;
console.log(rest1);

// rest1.owner = rest1.owner && 'ANON'; // This would've created a new var in the obj with 
// undefined, below code will fix that - If the member does not exists move on
// It will not create new var in the object.
rest1.owner &&= '<ANON>';
console.log(rest1); 

rest2.owner &&= '<ANON>';
console.log(rest2); 

/* 
We're building a football betting app 

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) 
    create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
    and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

const game = {
    team1: 'Barcelona',
    team2: 'Real Madrid',
    players: [
        [
            'Ter Stegen',
            'Dani Alves',
            'Pique',
            'Mascherano',
            'Jrodi Alba',
            'Xavi',
            'Iniesta',
            'Sergio Buscuetes',
            'Messi',
            'Suarez',
            'Neymar'
        ],
        [
            'Cassials',
            'Marcello',
            'Ramos',
            'Varane',
            'Dani Carvahal',
            'Xavi Alonso',
            'Isco',
            'Kroos',
            'Ronaldo',
            'Benzema',
            'Bale'
        ]
    ],
    score: '4:0',
    scored: ['Messi', 'Neymar', 'Messi', 'Suarez'],
    date: 'Nov 9th, 2014',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
    printGoals: function(...playerNames) {
        console.log(playerNames);
        console.log(`${playerNames.length} number of goals were scored.`);
    }
};

const [player1,player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = [...player1, 'Segri', 'Pedro', 'Fabregias'];
console.log(players1Final);

// const {team1, x:draw, team2} = game.odds;
const {odds: {team1, x:draw, team2}} = game;
console.log(team1, draw, team2);

game.printGoals(...game.scored);

game.odds.team1 > game.odds.team2 && console.log('Team 2 is likely to win.');
game.odds.team2 > game.odds.team1 && console.log('Team 1 is likely to win.');

for (const tempPlayer of player1) {
    console.log(tempPlayer);
}

for (const tempPlayer of player1.entries()) {
    console.log(tempPlayer);
}

for (const [i, el] of player1.entries()) {
    console.log(el, i);
}