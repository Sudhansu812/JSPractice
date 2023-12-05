'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'ABC NY SA123',
    categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({starterIndex, mainIndex, time, address}) {
        console.log(`Order Received. ${this.starterMenu[starterIndex]} \
and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}.`);
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Pasta: ${ing1}, ${ing2}, ${ing3}`);
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

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

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