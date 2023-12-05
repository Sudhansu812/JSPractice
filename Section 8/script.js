/*
What is JS?
- High level
- Garbage collected
- Interpreted or JIT (Just in time) compiled
- Multi-paradigm
    Paradigm - An approach and midset of structuring code which will direct your coding
         style and technique.
    Example:
        1. Procedural
        2. OOP
        3. Functional Programming (FP)
    JS can do all above
- Prototype-based object oriented
    Almost everything in JS is an object except primitive values.
- First-class functions
    In a language with first-class functions, functions are simply treated as variables.
    We can pass them into other functions, and return them from functions.
- Dynamic
    (No data types is defined.)
- Single threaded
    Concurrency model - How the JS engine handles multiple tasks happening at the same time.
    JS runs in one single thread, so it can only do one thing at a time.
    But JS uses event loops below:
- Event loop concurrency model
    - This takes log running tasks, executes them in the "backgroup", and puts them back 
      in the main thread once they are finished.
*/

/*
JS Engine - Program that executes JS code.
example: Chrome - V8 Engine

A JS Engine always contains an call stack and heap.
    Stack - Where the code is executed
    Heap - Where objects are stored

Compilation vs Interpretation
    Compilation - Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.
    Source code ---- compilation ----> Portable file (Mahine code) ---- Execution ----> Program running

    Interpretation - Interpreter runs through the source code and executes it line by line.
    Source code ---- Execution line by line ----> Program running

    Modern JS engine uses mix of interpretation and compilation which now is called JIT.
    Source code ---- Compilation ----> Machine code (no source file) ----> Execution ----> Program running
    Here JIT does not create a portable file and execution happens immediately.

    Steps:
    1. Parsing
    2. Compilation
    3. Execution

    Code is parsed into an AST (Abstarct syntax tree)
    - Read the code
    - Parsed into AST
    - Split each line of code into multiple peices like const keywords that are meaningful 
        to the language.
        and saving into a tree in a structured way 
    - This tep also checks for syntax errors.
    - Resulting tree will be used to generate machine code

    2. Compilation - This take the generated AST and compiles into machine code.

    3. Execution - The AST then is immediately executed.

    JS creates an unoptimized machine code and during execution it keeps recompiling 
        and optimize the code.
    
    Lexical scopring = Scoping is controlled by placement of functions and blocks in 
        the code

    Types of scope
    Global - Top level
    Function - Local / inside functions
    Black - Every thing inside curly braces from ES6 (only let and const, 
        var will be global still)

    If strict mode is turned off then variables can then be used outside score as well

    Hoisting - This makes some variables be accessible/usable in the code before they 
    are actually declared."Variables lifted to the top of the scope"

    Type       |Hoisted|   Initial Value   |   Scope
    Function    |   Y   |   Actual Function |   Block
    var         |   N   |   undefnied       |   Function
    let/const   |   N   |<uninitialized>,TDZ|   Block
    
    function/expression/arrow function - Depends on how they are defined 

    TDZ - Temporal Dead Zone

    *** this -> Special variable that is created for every execution context (every function).
    Takes value of (points to) the "owner" of the function in which this keyword is used.

    1. Global Context: When this is used in the global scope (outside any function or object), 
        it refers to the global object, which in a browser environment is usually the window object.
    2. Function Context: Inside a regular function (a function not defined as a method of an object), this 
        typically refers to the global object (window in a browser) unless the function is executed 
        in strict mode ('use strict'), in which case this is undefined.
    3. Method Context: When a function is called as a method of an object, this refers to the 
        object that the method is called on.
    4. Constructor Context: When a function is used as a constructor (using the new keyword), this refers 
        to the newly created object instance.
    5. Event Handler Context: In event handler functions, like those used with DOM events, this often 
        refers to the DOM element that triggered the event.
    6. Explicit Binding: You can explicitly set the value of this using methods like call(), apply(), 
        or bind(). These methods allow you to specify the object on which the function should be called.
    7. Arrow Functions: Arrow functions do not have their own this context. Instead, they inherit 
        the this value from the surrounding code (lexical scope).

    It's important to be aware of these rules and understand when this might behave differently based 
    on the context in which it's used. In practice, using this effectively often requires a good 
    understanding of JavaScript's object-oriented features and how functions are invoked.
*/
"use strict";

// if (1===1)
// {
//     var blockScope = 'Blockvar';
// }

// function parentFunc()
// {
//     console.log("Parent");
//     function childFunction() {
//         var childVar = 'ChildVar';
//         console.log("Child");
//     }
//     childFunction();
// }

// parentFunc();
// console.log(blockScore);
// childFunction(); // This does not work as the child function is also block scoped starting ES6
// console.log(childVar);

console.log("From global:");
console.log(this);

function thisCheckFunc()
{
    console.log("From inside normal function:");
    console.log(this);
}

thisCheckFunc();

const arrowFunc = () => {
    console.log("From inside arrow:");
    console.log(this);
}

arrowFunc();

let thisObj = {
    data: "Ayoo in an object.",
    objFunc: function() {
        console.log("From inside object:");
        console.log(this);
    }
}

thisObj.objFunc();
console.log(thisObj);

function Person(name) {
    this.name = name;
}

const person1 = new Person("Dalala");
console.log(person1);

document.getElementById("myButton").addEventListener('click', function() {
    console.log(this.id);
    console.log(this);
});

const person = {
    name: 'Alice',
    sayHello: function() {
        console.log(`Hello, ${this.name}`);
    }
}

const anotherPerson = {
    name: 'Bob'
}

person.sayHello.call(anotherPerson);

const firstName = "Sudhansu";

const data = {
    firstName: "Data",
    printName: function() {
        console.log(firstName);
        console.log(this.firstName);
    },
    printNameArrow: () => {
        console.log(firstName);
        console.log(this.firstName);
    }
}

data.printName();
data.printNameArrow();

// Arguments keyword - This can only be used with regular 
// functions and can get multiple arguments (old way there is a new way as well)
const addNumbers = function (a, b) {
    console.log(arguments);
    return a + b;
}

addNumbers(12, 4);

// Datatypes
const me = {
    name: 'Sudhansu',
    age: 24
}
console.log(me.age);
const friend = me;
friend.age = 25;
console.log(me.age);

/*
    Primitive - Number, String, Boolean, Undefined, Null, Symbol, Bigint -> copy kinda
    Objects - Object literal, arrays, Funcation, etc -> Reference

    -> Primitives will be stored in a stack
    -> objects will store the reference to the heap address value in stack,
       the object data is stored in the heap.
*/

const obj1 = {
    data: "data1",
    num: 12
}

const obj2 = Object.assign({}, obj1); 
// Shallow copy - Only copies the properties, ie it will copy the values but if the obj
// has an object init, it will copy the addess to the copy obj.
// This is not desirable as the copy is meant to not interfare with the original object.
// in this case if the inner object is chaged in the copy, same will reflect in outer.